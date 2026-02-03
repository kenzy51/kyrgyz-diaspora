import { Controller, Post, Body, Res } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Response } from 'express';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

@Post()
async handleChat(@Body('messages') messages: any[], @Res() res: Response) {
  console.log("1. Controller hit with messages:", messages?.length);

  try {
    // 2. Set headers manually to ensure the browser knows it's a stream
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('X-Vercel-AI-Data-Stream', 'v1');

    const result = await this.chatService.createChatStream(messages);
    console.log("2. Stream created, starting pipe...");

    // 3. Pipe the result
    result.pipeUIMessageStreamToResponse(res, {
        originalMessages: messages,
    });
    
  } catch (error:any) {
    console.error("BACKEND ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}
}