import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeamMember } from './schemas/team-member.schema';
import { CreateTeamMemberDto } from './dto/create-team.dto';
import { UpdateTeamMemberDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(TeamMember.name)
    private readonly teamModel: Model<TeamMember>,
  ) {}

  /* =========================
     CREATE TEAM MEMBER
  ========================= */
  async create(dto: CreateTeamMemberDto) {
    try {
      const newMember = new this.teamModel(dto);
      const savedMember = await newMember.save();
      return {
        success: true,
        message: 'Team member added successfully',
        data: savedMember,
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to add team member');
    }
  }

  /* =========================
     GET ALL TEAM MEMBERS
  ========================= */
  async findAll() {
    const members = await this.teamModel
      .find()
      .populate('assigned_projects', 'project_name status priority')
      .sort({ createdAt: -1 });

    return {
      success: true,
      count: members.length,
      data: members,
    };
  }

  /* =========================
     GET SINGLE TEAM MEMBER
  ========================= */
  async findById(id: string) {
    const member = await this.teamModel.findById(id);

    if (!member) throw new NotFoundException('Team member not found');
    return { success: true, data: member };
  }

  /* =========================
     UPDATE TEAM MEMBER
  ========================= */
  async update(id: string, dto: UpdateTeamMemberDto) {
    // Validate ObjectId
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid team member ID');
    }

    const updated = await this.teamModel.findByIdAndUpdate(
      id,
      { $set: dto },
      { new: true, runValidators: true },
    );

    if (!updated) throw new NotFoundException('Team member not found');

    return {
      success: true,
      message: 'Team member updated successfully',
      data: updated,
    };
  }

  /* =========================
     DELETE TEAM MEMBER
  ========================= */
  async remove(id: string) {
    const deleted = await this.teamModel.findByIdAndDelete(id);

    if (!deleted) throw new NotFoundException('Team member not found');
    return {
      success: true,
      message: 'Team member deleted successfully',
    };
  }
}
