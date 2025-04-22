import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './config/constants';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
  const configService = app.get(ConfigService);
  // server port
  const port = configService.get<number>('PORT') || SERVER_PORT;
  await app.listen(4000);
  //console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
