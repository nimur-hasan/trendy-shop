import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeType } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('MSC Backend')
    .setDescription('The backend API description')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http' as SecuritySchemeType,
      description: 'JWT Token',
      scheme: 'bearer',
      name: 'Authorization',
      bearerFormat: 'JWT',
    })
    .build();

  app.setGlobalPrefix('api');
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();
