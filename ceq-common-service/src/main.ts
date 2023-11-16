import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Docs for `account-service/subscriptions` module
 * @packageDocumentation
 */

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
