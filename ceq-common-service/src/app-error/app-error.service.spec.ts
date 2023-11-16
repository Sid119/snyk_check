import { Test, TestingModule } from '@nestjs/testing';
import { AppErrorService } from './app-error.service';

describe('AppErrorService', () => {
    let service: AppErrorService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppErrorService],
        }).compile();

        service = module.get<AppErrorService>(AppErrorService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
