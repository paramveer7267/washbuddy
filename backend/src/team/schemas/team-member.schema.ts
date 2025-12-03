import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class TeamMember extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string;

  @Prop({ type: String, trim: true, default: '' })
  email: string;

  @Prop()
  phone?: string;

  @Prop({ type: [String], trim: true, default: [] })
  tech_stack: string[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Project' }],
    default: [],
  })
  assigned_projects: Types.ObjectId[];

  @Prop({
    type: String,
    enum: ['available', 'busy', 'on-leave'],
    default: 'available',
  })
  availability_status: string;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
