// src/events/dto/create-event.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDateString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({
    example: "Kyrgyz Cultural Night",
    description: "The title or name of the event",
  })
  @IsString()
  readonly title!: string;

  @ApiProperty({
    example: "2025-11-15T19:00:00.000Z",
    description: "The date and time of the event in ISO 8601 format",
  })
  @IsDateString()
  readonly date!: string;

  @ApiProperty({
    example: "New York",
    description: "City where the event will take place",
  })
  @IsString()
  readonly city!: string;

  @ApiProperty({
    example: "Brooklyn Community Center, 1829 E 13th St",
    description: "Specific venue or address of the event",
  })
  @IsString()
  readonly location!: string;
}
