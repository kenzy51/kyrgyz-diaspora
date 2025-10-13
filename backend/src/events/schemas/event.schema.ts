import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EventDocument = Event & Document;
@Schema()
export class Event {
  @Prop({ required: true, type: String })
  title!: string;

  @Prop({ required: true, type: String })
  date!: string;

  @Prop()
  location!: string;

  @Prop({
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  })
  status!: string;
}

// ✅ Create and export schema
export const EventSchema = SchemaFactory.createForClass(Event);
