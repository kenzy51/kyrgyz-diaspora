import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, MinLength, IsOptional } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Kanat Nazarov",
    description: "Full name of the user",
  })
  @IsString()
  readonly name!: string;

  @ApiProperty({
    example: "+1 (929) 325-9094",
    description: "Phone number of the user",
  })
  @IsString()
  readonly phone!: string;

  @ApiProperty({
    example: "kanat@example.com",
    description: "Email address of the user",
  })
  @IsEmail()
  readonly email!: string;

  @ApiProperty({
    example: "securePassword123",
    description: "Password for user account (min 6 characters)",
  })
  @IsString()
  @MinLength(6)
  readonly password!: string;

  @ApiProperty({
    example: "user",
    description: "Optional user role (user, admin, etc.)",
  })
  @IsOptional()
  @IsString()
  readonly role?: string;
}
