import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`Nest is running on port: ${port}`);
  } catch (err) {
    console.error(err);
  }
}
void bootstrap();
