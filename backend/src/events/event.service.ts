// src/events/event.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEventDto } from "./dto/create-event.dto";
import { Event, EventDocument } from "./schemas/event.schema";

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

async create(dto: CreateEventDto, user: any): Promise<Event> {
  const eventData = {
    ...dto,
    creatorName: user.name,
    creatorPhone: user.phone,
    creatorId: user.sub,  // ← Use sub, not id
    status: "pending",
  };

  return this.eventModel.create(eventData);
}

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().sort({ createdAt: -1 }); // newest first
  }

  async findById(id: string): Promise<Event> {
    const event = await this.eventModel.findById(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  async update(id: string, dto: CreateEventDto): Promise<Event> {
    const event = await this.eventModel.findByIdAndUpdate(id, dto, { new: true });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  async delete(id: string): Promise<Event> {
    const event = await this.eventModel.findByIdAndRemove(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }
}