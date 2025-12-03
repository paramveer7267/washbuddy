import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
  IsMongoId,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TransformObjectIdArray } from '../../common/decorators/transform-objectid-array.decorator';
class ProjectFileDto {
  @IsString()
  name: string;

  @IsString()
  file_link: string;
}

export class CreateProjectDto {
  @IsMongoId()
  @IsNotEmpty()
  client: string;

  @IsString()
  @IsNotEmpty()
  project_name: string;

  @IsString()
  @IsNotEmpty()
  project_type: string;

  @IsOptional()
  @IsString()
  project_description?: string;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsEnum(['planning', 'in-progress', 'revision', 'completed', 'on-hold'])
  status?: string;

  @IsOptional()
  @IsEnum(['low', 'medium', 'high'])
  priority?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tech_stack?: string[];

  @IsOptional()
  @IsArray()
  @TransformObjectIdArray()
  @IsMongoId({ each: true })
  assigned_team?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectFileDto)
  project_files?: ProjectFileDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  deliverables?: string[];

  @IsOptional()
  @IsArray()
  @TransformObjectIdArray()
  @IsMongoId({ each: true })
  payments?: string[];
}
