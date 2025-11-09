import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class RegisterDto {
  @IsNotEmpty() name!: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsNotEmpty() phone!: string;
  @MinLength(6) password!: string;
}
