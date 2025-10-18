import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDateString,
  IsBoolean,
  IsOptional,
  IsIn,
} from "class-validator";

export class CreateEventDto {
  @ApiProperty({
    example: "Kyrgyz Cultural Night",
    description: "The title or name of the event",
  })
  @IsString()
  readonly title!: string;

  @ApiProperty({
    example: "2025-11-15T19:00:00.000Z",
    description: "The date and time of the event (ISO 8601 format)",
  })
  @IsDateString()
  readonly date!: string;

  @ApiProperty({
    example: "New York",
    description: "Location where the event will be held",
  })
  @IsString()
  readonly city!: string;
  @ApiProperty({
    example: "Brooklyn, neptune av 1432",
    description: "Location where the event will be held",
  })
  @IsString()
  readonly location!: string;

  @ApiProperty({
    example: "pending",
    description: "The current status of the event",
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  })
  @IsOptional()
  @IsIn(["pending", "approved", "rejected"])
  readonly status?: string;
}
