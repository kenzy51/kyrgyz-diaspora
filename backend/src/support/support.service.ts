// src/support/support.service.ts
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Support, SupportDocument } from "./schemas/support.schema";

@Injectable()
export class SupportService {
  constructor(
    @InjectModel(Support.name) private supportModel: Model<SupportDocument>
  ) {}

  async create(
    question: string,
    name?: string,
    phone?: string
  ): Promise<Support> {
    if (!question || !question.trim()) {
      throw new BadRequestException("Question is required");
    }

    const data = {
      question: question.trim(),
      creatorName: name?.trim() || "Аноним",
      creatorPhone: phone?.trim() || "Не указан",
      creatorId: null,
      answered: false,
    };

    try {
      const createdSupport = await this.supportModel.create(data);
      return createdSupport;
    } catch (error) {
      // Log error in production (you can add logger later)
      console.error("Failed to save support question:", error);
      throw new BadRequestException("Failed to submit question. Please try again.");
    }
  }

  // Bonus: Useful for future admin panel
  async findAll(): Promise<Support[]> {
    return this.supportModel.find().sort({ createdAt: -1 }).exec();
  }

  async findUnanswered(): Promise<Support[]> {
    return this.supportModel.find({ answered: false }).sort({ createdAt: -1 }).exec();
  }
}