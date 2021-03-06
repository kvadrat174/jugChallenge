import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('jugChallenge')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix('api/jugchallenge');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(`api/jugchallenge/docs`, app, document);

  await app.listen(3000);
  console.log(`Application freelancers is running on: ${await app.getUrl()}`);
}
bootstrap();
