import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsEmail,
  IsArray,
  IsMongoId,
  ValidateIf,
} from 'class-validator';
import { TransformObjectIdArray } from '../../common/decorators/transform-objectid-array.decorator';
export class CreateTeamMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @ValidateIf((o) => o.email)
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tech_stack?: string[];

  @IsOptional()
  @IsArray()
  @TransformObjectIdArray()
  @IsMongoId({ each: true })
  assigned_projects?: string[];

  @IsOptional()
  @IsEnum(['available', 'busy', 'on-leave'])
  availability_status?: string;
}
