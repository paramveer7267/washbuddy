import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project, ProjectSchema } from './schemas/project.schema';
import { Client, ClientSchema } from '../clients/schemas/client.schema';
import { Payment, PaymentSchema } from '../payments/schemas/payment.schema';
import {
  TeamMember,
  TeamMemberSchema,
} from '../team/schemas/team-member.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Project.name, schema: ProjectSchema },
      { name: Client.name, schema: ClientSchema },
      { name: Payment.name, schema: PaymentSchema },
      { name: TeamMember.name, schema: TeamMemberSchema },
    ]),
    AuthModule,
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
