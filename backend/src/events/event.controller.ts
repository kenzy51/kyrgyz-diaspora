// src/events/events.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt.guard"; // adjust path if needed
import { EventsService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { Event } from "./schemas/event.schema";

@ApiTags("Events")
@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Create a new event (authenticated users only)" })
  @ApiCreatedResponse({ description: "Event created successfully" })
  async create(@Req() req: any, @Body() dto: CreateEventDto) {
    const user = req.user; 
    return this.eventsService.create(dto, user);
  }

  @Get()
  @ApiOperation({ summary: "Get all events" })
  @ApiOkResponse({ type: [Event] })
  getAll() {
    return this.eventsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get event by ID" })
  @ApiOkResponse({ type: Event })
  @ApiNotFoundResponse({ description: "Event not found" })
  getEventById(@Param("id") id: string) {
    return this.eventsService.findById(id);
  }

  @Put(":id")
  updateEvent(@Param("id") id: string, @Body() dto: CreateEventDto) {
    return this.eventsService.update(id, dto);
  }

  @Delete(":id")
  deleteEvent(@Param("id") id: string) {
    return this.eventsService.delete(id);
  }
}