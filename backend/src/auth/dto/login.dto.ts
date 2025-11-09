import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: '+1 (929) 325-9094',
    description: 'Phone number of the user',
  })
  @IsNotEmpty()
  @IsString()
  readonly phone!: string;

  @ApiProperty({
    example: 'securePassword123',
    description: 'User password (min 6 characters)',
  })
  @IsNotEmpty()
  @MinLength(6)
  readonly password!: string;
}
