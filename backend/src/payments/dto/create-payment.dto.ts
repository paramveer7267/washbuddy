import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsMongoId,
  IsDateString,
  IsNumber,
} from 'class-validator';
import { TransformObjectIdArray } from '../../common/decorators/transform-objectid-array.decorator';
export class CreatePaymentDto {
  @TransformObjectIdArray()
  @IsMongoId()
  @IsNotEmpty()
  project: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  total_amount: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsEnum(['pending', 'partial', 'paid'])
  payment_status?: string;

  @IsOptional()
  @IsEnum(['bank', 'stripe', 'paypal', 'upi', 'cash'])
  payment_method?: string;

  @IsOptional()
  @IsEnum(['receive', 'send'])
  payout?: string;

  @IsOptional()
  @IsDateString()
  payment_due_date?: string;

  @IsOptional()
  @IsDateString()
  last_payment_date?: string;

  @IsOptional()
  @IsString()
  invoice_link?: string;
}
