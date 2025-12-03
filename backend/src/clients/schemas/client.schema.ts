import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Client extends Document {
  @Prop({ required: true })
  full_name: string;

  @Prop()
  company_name?: string;

  @Prop({ type: String, trim: true, default: '' })
  email: string;

  @Prop()
  phone_number?: string;

  @Prop()
  country?: string;

  @Prop()
  address?: string;

  @Prop()
  industry?: string;

  @Prop({
    type: String,
    enum: ['email', 'whatsapp', 'call'],
    default: 'email',
  })
  preferred_contact_method: string;

  @Prop({
    type: String,
    enum: ['website', 'upwork', 'instagram', 'referral', 'freelancer', 'other'],
    default: 'other',
  })
  source: string;

  @Prop({
    type: String,
    enum: ['lead', 'offline', 'active', 'inactive', 'lost'],
    default: 'lead',
  })
  status: string;

  @Prop()
  notes?: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Project' }],
    default: [],
  })
  projects: Types.ObjectId[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
