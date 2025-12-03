import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
  IsMongoId,
  IsEmail,
  ValidateIf,
} from 'class-validator';
import { TransformObjectIdArray } from '../../common/decorators/transform-objectid-array.decorator';
export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsOptional()
  @IsString()
  company_name?: string;

  @ValidateIf((o) => o.email)
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  industry?: string;

  @IsOptional()
  @IsEnum(['email', 'whatsapp', 'call'])
  preferred_contact_method?: string;

  @IsOptional()
  @IsEnum(['website', 'upwork', 'instagram', 'referral', 'freelancer', 'other'])
  source?: string;

  @IsOptional()
  @IsEnum(['lead', 'offline', 'active', 'inactive', 'lost'])
  status?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @TransformObjectIdArray()
  @IsArray()
  @IsMongoId({ each: true })
  projects?: string[];
}
