import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
  client: Types.ObjectId;

  @Prop({ required: true })
  project_name: string;

  @Prop({ required: true })
  project_type: string;

  @Prop()
  project_description?: string;

  @Prop()
  start_date?: Date;

  @Prop()
  deadline?: Date;

  @Prop({
    type: String,
    enum: ['planning', 'in-progress', 'revision', 'completed', 'on-hold'],
    default: 'planning',
  })
  status: string;

  @Prop({
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  })
  priority: string;

  @Prop({ type: [String], trim: true, default: [] })
  tech_stack: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'TeamMember' }], default: [] })
  assigned_team: Types.ObjectId[];

  @Prop({
    type: [
      {
        name: { type: String, trim: true },
        file_link: { type: String, trim: true },
      },
    ],
    default: [],
  })
  project_files: { name: string; file_link: string }[];

  @Prop({ type: [String], default: [] })
  deliverables: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Payment' }], default: [] })
  payments: Types.ObjectId[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
