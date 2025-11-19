import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class RegisterDto {

  @ApiProperty({
    example: "Kanat Nazarov",
    description: "Name of person right here",
  })
  @IsNotEmpty() name!: string;
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: "+1 929 499 4343",
    description: "phone number",
  })
  @IsNotEmpty()
  phone!: string;

  @ApiProperty({
    example: "qwerty200",
    description: "Type your password",
  })
  @MinLength(6) password!: string;
}
