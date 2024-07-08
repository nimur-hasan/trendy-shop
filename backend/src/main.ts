import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeType } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addServer('/api')
    .setBasePath('/api')
    .setTitle('Backend Documentation')
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

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'Backend Documentation',
    // customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js',
      'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js',
    ],
    customCssUrl: ['https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css'],
  });

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
