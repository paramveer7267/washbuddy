import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Project } from './schemas/project.schema';
import { Client } from '../clients/schemas/client.schema';
import { Payment } from '../payments/schemas/payment.schema';
import { TeamMember } from '../team/schemas/team-member.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
    @InjectModel(TeamMember.name) private readonly teamModel: Model<TeamMember>,
  ) {}

  /* =========================
     CREATE PROJECT
  ========================= */
  async create(dto: CreateProjectDto) {
    try {
      const { payments, assigned_team = [], ...projectData } = dto;

      const newProject = new this.projectModel({
        ...projectData,
        assigned_team,
      });

      await newProject.save();

      /* Handle Payments */
      if (payments?.length) {
        const createdPayments = await this.paymentModel.insertMany(
          payments.map((p) => ({
            ...(p as unknown as Record<string, any>),
            project: newProject._id,
          })),
        );

        newProject.payments = createdPayments.map(
          (p) => p._id as Types.ObjectId,
        );
        await newProject.save();
      }

      /* Link to Client */
      await this.clientModel.findByIdAndUpdate(newProject.client, {
        $push: { projects: newProject._id },
      });

      /* Assign Team Members */
      if (assigned_team.length > 0) {
        await this.teamModel.updateMany(
          { _id: { $in: assigned_team } },
          { $addToSet: { assigned_projects: newProject._id } },
        );
      }

      const savedProject = await this.projectModel
        .findById(newProject._id)
        .populate('client', 'full_name company_name email')
        .populate('payments')
        .populate('assigned_team', 'name role email tech_stack');

      return {
        success: true,
        message: 'Project created successfully',
        data: savedProject,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to create project',
        error: error.message,
      });
    }
  }

  /* =========================
     GET ALL PROJECTS
  ========================= */
  async findAll() {
    const projects = await this.projectModel
      .find()
      .populate('client', 'full_name email company_name')
      .populate('assigned_team', 'name role email tech_stack')
      .populate({
        path: 'payments',
        select:
          'title total_amount payment_due_date payout payment_status payment_method',
      })
      .sort({ createdAt: -1 });

    return { success: true, count: projects.length, data: projects };
  }

  /* =========================
     GET PROJECT BY ID
  ========================= */
  async findById(id: string) {
    const project = await this.projectModel
      .findById(id)
      .populate('client', 'full_name email company_name')
      .populate('assigned_team', 'name role email phone tech_stack')
      .populate({
        path: 'payments',
        select:
          'title total_amount payment_due_date payout payment_status payment_method',
      });

    if (!project) throw new NotFoundException('Project not found');
    return { success: true, data: project };
  }

  /* =========================
     UPDATE PROJECT
  ========================= */
  async update(id: string, dto: UpdateProjectDto) {
    const { assigned_team = [], client, ...updateData } = dto;

    // Step 1: Find existing project
    const project = await this.projectModel.findById(id);
    if (!project) throw new NotFoundException('Project not found');

    const oldClientId = project.client?.toString();

    // Step 2: Update project fields
    project.set({ ...updateData, assigned_team, client });
    await project.save();

    // Step 3: Sync team assignments
    await this.teamModel.updateMany(
      { assigned_projects: project._id },
      { $pull: { assigned_projects: project._id } },
    );

    if (assigned_team.length > 0) {
      await this.teamModel.updateMany(
        { _id: { $in: assigned_team } },
        { $addToSet: { assigned_projects: project._id } },
      );
    }

    // Step 4: Sync client assignments
    if (client && client !== oldClientId) {
      // Remove from old client’s list
      if (oldClientId) {
        await this.clientModel.updateOne(
          { _id: oldClientId },
          { $pull: { projects: project._id } },
        );
      }

      // Add to new client’s list
      await this.clientModel.updateOne(
        { _id: client },
        { $addToSet: { projects: project._id } },
      );
    }

    // Step 5: Return populated updated project
    const updated = await this.projectModel
      .findById(project._id)
      .populate('client', 'full_name company_name email')
      .populate('assigned_team', 'name role email tech_stack');

    return {
      success: true,
      message: 'Project updated successfully',
      data: updated,
    };
  }

  /* =========================
     DELETE PROJECT
  ========================= */
  async remove(id: string) {
    // Delete the project
    const deleted = await this.projectModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Project not found');

    // Remove this project from all teams that had it assigned
    await this.teamModel.updateMany(
      { assigned_projects: id },
      { $pull: { assigned_projects: id } },
    );

    // Delete all payments related to this project
    await this.paymentModel.deleteMany({ project: id });

    return {
      success: true,
      message: 'Project and associated payments deleted successfully',
    };
  }
}
