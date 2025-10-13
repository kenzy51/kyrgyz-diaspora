import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEventDto } from "./dto/create-event.dto";
import { Event, EventDocument } from "./schemas/event.schema";

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>
  ) {}

  // --- CREATE EVENT ---
  async create(dto: CreateEventDto): Promise<Event> {
    const event = await this.eventModel.create({ ...dto });
    return event;
  }

  // --- GET ALL EVENTS ---
  async findAll(): Promise<Event[]> {
    const events = await this.eventModel.find();
    return events;
  }

  // --- GET EVENT BY ID ---
  async findById(id: string): Promise<Event> {
    const event = await this.eventModel.findById(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  // --- UPDATE EVENT ---
  async update(id: string, dto: CreateEventDto): Promise<Event> {
    const event = await this.eventModel.findByIdAndUpdate(id, dto, { new: true });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  // --- DELETE EVENT ---
  async delete(id: string): Promise<Event> {
    const event = await this.eventModel.findByIdAndRemove(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

 
}
