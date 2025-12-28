// src/events/schemas/event.schema.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type EventDocument = Event & Document;

@Schema({ timestamps: true })
export class Event {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  date!: string; 

  @Prop({ required: true })
  city!: string;

  @Prop({ required: true })
  location!: string;

  // Creator info — automatically filled from JWT
  @Prop({ required: true })
  creatorName!: string;

  @Prop({ required: true })
  creatorPhone!: string;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  creatorId!: Types.ObjectId;

  // 
  @Prop({
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  })
  status!: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);