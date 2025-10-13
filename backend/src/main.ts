import 'reflect-metadata';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Swagger application for backend")
    .setDescription("RESTApi documentation")
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access-token', 
    )
    .build()
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/docs", app, document);
  app.enableCors();
  await app.listen(PORT, () =>
    console.log(`server started http://localhost:${PORT}/docs`),
  );
}
bootstrap();
