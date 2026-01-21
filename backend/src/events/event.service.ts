import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { InjectRedis } from "@nestjs-modules/ioredis"; 
import Redis from "ioredis"; 
import { CreateEventDto } from "./dto/create-event.dto";
import { Event, EventDocument } from "./schemas/event.schema";

@Injectable()
export class EventsService {
  private readonly CACHE_KEY = 'events:all';

  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    @InjectRedis() private readonly redis: Redis 
  ) {}

  async create(dto: CreateEventDto, user: any): Promise<Event> {
    const eventData = {
      ...dto,
      creatorName: user.name,
      creatorPhone: user.phone,
      creatorId: user.sub,
      status: "pending",
    };

    const newEvent = await this.eventModel.create(eventData);
    await this.redis.del(this.CACHE_KEY); // Очищаем кэш при создании
    return newEvent;
  }

  async findAll(): Promise<Event[]> {
    const cached = await this.redis.get(this.CACHE_KEY);
    if (cached) return JSON.parse(cached);

    const events = await this.eventModel.find().sort({ createdAt: -1 });

    await this.redis.set(this.CACHE_KEY, JSON.stringify(events), 'EX', 1800);
    return events;
  }

  async findById(id: string): Promise<Event> {
    const event = await this.eventModel.findById(id);
    if (!event) throw new NotFoundException(`Event with ID ${id} not found`);
    return event;
  }

  async update(id: string, dto: CreateEventDto): Promise<Event> {
    const event = await this.eventModel.findByIdAndUpdate(id, dto, { new: true });
    if (!event) throw new NotFoundException(`Event with ID ${id} not found`);
    
    await this.redis.del(this.CACHE_KEY); 
    return event;
  }

  async delete(id: string): Promise<Event> {
    const event = await this.eventModel.findByIdAndDelete(id);
    if (!event) throw new NotFoundException(`Event with ID ${id} not found`);
    
    await this.redis.del(this.CACHE_KEY); 
    return event;
  }
}