import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { EventsModule } from "./events/event.module";
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    // @ts-ignore
    MongooseModule.forRoot(process.env.MONGO_URL),
    EventsModule,
  ],
})
export class AppModule {}
