import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class EmailDto {
  @IsEmail()
  toMail: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  body: any;

  @IsNotEmpty()
  @IsOptional()
  templates?: string;
}
