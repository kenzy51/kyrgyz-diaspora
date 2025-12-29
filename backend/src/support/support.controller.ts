// src/support/support.controller.ts
import {
  Body,
  Controller,
  Post,
  BadRequestException,
  UseGuards,
  Get,
} from "@nestjs/common";
import { SupportService } from "./support.service";
import { JwtAuthGuard } from "../auth/jwt.guard";
import { ApiOperation } from "@nestjs/swagger";

class SubmitQuestionDto {
  question: string | undefined;
  name?: string;
  phone?: string;
}

@Controller("support")
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post("question")
  @ApiOperation({ summary: "Submit a support question (public)" })
  async submitQuestion(@Body() dto: SubmitQuestionDto) {
    if (!dto.question || !dto.question.trim()) {
      throw new BadRequestException("Question is required");
    }

    return this.supportService.create(
      dto.question.trim(),
      dto.name?.trim(),
      dto.phone?.trim()
    );
  }
  // PROTECTED — only authenticated (and ideally admin) users can view all questions
  @Get("questions")
  @UseGuards(JwtAuthGuard)
  async getAllQuestions() {
    return this.supportService.findAll();
  }
}
