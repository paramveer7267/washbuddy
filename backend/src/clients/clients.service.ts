import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './schemas/client.schema';
import { Project } from '../projects/schemas/project.schema';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  /* =========================
     CREATE CLIENT
  ========================= */
  async create(dto: CreateClientDto) {
    try {
      const newClient = new this.clientModel(dto);
      const savedClient = await newClient.save();

      return {
        success: true,
        message: 'Client created successfully',
        data: savedClient,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to create client',
        error: error.message,
      });
    }
  }

  /* =========================
     GET ALL CLIENTS
  ========================= */
  async findAll() {
    const clients = await this.clientModel
      .find()
      .populate('projects', 'project_name status deadline priority')
      .sort({ createdAt: -1 });

    return {
      success: true,
      count: clients.length,
      data: clients,
    };
  }

  /* =========================
     GET SINGLE CLIENT
  ========================= */
  async findById(id: string) {
    const client = await this.clientModel
      .findById(id)
      .populate('projects', 'project_name status deadline priority');

    if (!client) throw new NotFoundException('Client not found');

    return {
      success: true,
      data: client,
    };
  }

  /* =========================
     UPDATE CLIENT
  ========================= */
  async update(id: string, dto: UpdateClientDto) {
    const updated = await this.clientModel.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });

    if (!updated) throw new NotFoundException('Client not found');

    return {
      success: true,
      message: 'Client updated successfully',
      data: updated,
    };
  }

  /* =========================
     DELETE CLIENT
  ========================= */
  async remove(id: string) {
    const deleted = await this.clientModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Client not found');

    return {
      success: true,
      message: 'Client deleted successfully',
    };
  }
}
