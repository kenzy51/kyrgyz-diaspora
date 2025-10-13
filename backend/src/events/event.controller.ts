import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from "@nestjs/common";
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from "@nestjs/swagger";
import { CreateEventDto } from "./dto/create-event.dto";
import { EventsService } from "./event.service";
import { Event } from "./schemas/event.schema";

@ApiTags("Events")
@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  // --- CREATE EVENT ---
  @Post()
  @ApiOperation({ summary: "Create a new event" })
  @ApiCreatedResponse({
    description: "The event has been successfully created.",
  })
  create(@Body() dto: CreateEventDto) {
    return this.eventsService.create(dto);
  }

  // --- GET ALL EVENTS ---
  @Get()
  @ApiOperation({ summary: "Get all events" })
  @ApiResponse({ status: 200, description: "Returns an array of event objects" })
  getAll() {
    return this.eventsService.findAll();
  }

  // --- GET EVENT BY ID ---
  @Get(":id")
  @ApiOperation({ summary: "Get an event by ID" })
  @ApiOkResponse({
    type: Event,
    description: "Returns the event with the specified ID",
  })
  @ApiNotFoundResponse({ description: "Event with the specified ID not found" })
  getEventById(@Param("id") id: string) {
    return this.eventsService.findById(id);
  }

  // --- UPDATE EVENT ---
  @Put(":id")
  @ApiOperation({ summary: "Update an event by ID" })
  @ApiOkResponse({ type: Event, description: "Returns the updated event" })
  @ApiNotFoundResponse({ description: "Event with the specified ID not found" })
  updateEvent(@Param("id") id: string, @Body() dto: CreateEventDto) {
    return this.eventsService.update(id, dto);
  }

  // --- DELETE EVENT ---
  @Delete(":id")
  @ApiOperation({ summary: "Delete an event by ID" })
  @ApiOkResponse({ type: Event, description: "Returns the deleted event" })
  @ApiNotFoundResponse({ description: "Event with the specified ID not found" })
  deleteEvent(@Param("id") id: string) {
    return this.eventsService.delete(id);
  }

}
