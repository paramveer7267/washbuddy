import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Payment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Project', required: true })
  project: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ type: Number, required: true })
  total_amount: number;

  @Prop({ type: String, default: 'INR' })
  currency: string;

  @Prop({
    type: String,
    enum: ['pending', 'partial', 'paid'],
    default: 'pending',
  })
  payment_status: string;

  @Prop({
    type: String,
    enum: ['bank', 'stripe', 'paypal', 'upi', 'cash'],
    default: 'bank',
  })
  payment_method: string;

  @Prop({
    type: String,
    enum: ['receive', 'send'],
    default: 'receive',
  })
  payout: string;

  @Prop({ type: Date })
  payment_due_date?: Date;

  @Prop({ type: Date })
  last_payment_date?: Date;

  @Prop()
  invoice_link?: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
