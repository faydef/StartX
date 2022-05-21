import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    methods: 'GET,POST,PUT,DELETE',
    origin: [process.env.CLIENT_URL],
  };
  app.enableCors(corsOptions);
  await app.listen(8000);
}
bootstrap();
