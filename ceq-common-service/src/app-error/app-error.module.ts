import { Module } from '@nestjs/common';
import { AppErrorService } from './app-error.service';

export * from './app-error';
export * from './app-error.service';
export * from './app-error.filter';

@Module({
    providers: [AppErrorService],
})
export class AppErrorModule {}
