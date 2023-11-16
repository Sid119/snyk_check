import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';
import { AppErrorModule } from './app-error/app-error.module';
import { LoggerModule } from './Logger/logger.module';

@Module({
    imports: [DocumentModule, AppErrorModule, LoggerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
