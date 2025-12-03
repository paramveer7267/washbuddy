import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './schemas/payment.schema';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Project } from '../projects/schemas/project.schema';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  /* =========================
     CREATE PAYMENT
  ========================= */
  async create(dto: CreatePaymentDto) {
    try {
      const payment = await this.paymentModel.create(dto);

      // 🔹 Add payment reference to project
      await this.projectModel.findByIdAndUpdate(payment.project, {
        $addToSet: { payments: payment._id },
      });

      return {
        success: true,
        message: 'Payment added successfully',
        data: payment,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to create payment',
        error: error.message,
      });
    }
  }

  /* =========================
     GET ALL PAYMENTS
  ========================= */
  async findAll() {
    const payments = await this.paymentModel
      .find()
      .populate('project', 'project_name status priority deadline')
      .sort({ createdAt: -1 });

    return { success: true, count: payments.length, data: payments };
  }

  /* =========================
     GET PAYMENT BY ID
  ========================= */
  async findById(id: string) {
    const payment = await this.paymentModel
      .findById(id)
      .populate('project', 'project_name status priority');

    if (!payment) throw new NotFoundException('Payment not found');
    return { success: true, data: payment };
  }

  /* =========================
     UPDATE PAYMENT
  ========================= */
  async update(id: string, dto: UpdatePaymentDto) {
    const updated = await this.paymentModel.findByIdAndUpdate(id, dto, {
      new: true,
      runValidators: true,
    });

    if (!updated) throw new NotFoundException('Payment not found');
    return {
      success: true,
      message: 'Payment updated successfully',
      data: updated,
    };
  }

  /* =========================
     DELETE PAYMENT
  ========================= */
  async remove(id: string) {
    const deleted = await this.paymentModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Payment not found');

    // 🔹 Remove payment reference from project
    await this.projectModel.updateMany(
      { payments: id },
      { $pull: { payments: id } },
    );

    return {
      success: true,
      message: 'Payment deleted successfully',
    };
  }
}
