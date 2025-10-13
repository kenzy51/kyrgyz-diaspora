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
    MongooseModule.forRoot(
      "mongodb+srv://kanat:kanat200411@kyrgyz-community-cluste.aqmjuua.mongodb.net/communitydb?retryWrites=true&w=majority&appName=kyrgyz-community-cluster",
    ),
    EventsModule,
  ],
})
export class AppModule {}
