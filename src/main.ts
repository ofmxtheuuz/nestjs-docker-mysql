import * as dotenv from "dotenv"
dotenv.config()

import "reflect-metadata"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mysql_context } from 'infrastructure/mysql.context';

async function bootstrap() {
  mysql_context.initialize().then(async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  })
}
bootstrap();
