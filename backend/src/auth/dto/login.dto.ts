import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  emailorusername: string;

  @IsNotEmpty()
  password: string;
}
