import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type SupportDocument = Support & Document;

@Schema({ timestamps: true })
export class Support {
@Prop({ required: true })
question!: string;

@Prop({ default: "Аноним" })
creatorName!: string;

@Prop({ default: "Не указан" })
creatorPhone!: string;

@Prop({ type: Types.ObjectId, ref: "User", required: false }) // ← required: false
creatorId!: Types.ObjectId | null;

@Prop({ default: false })
answered!: boolean;
}

export const SupportSchema = SchemaFactory.createForClass(Support);
