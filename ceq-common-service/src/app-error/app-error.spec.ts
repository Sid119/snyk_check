import { AppError } from './app-error';

describe('AppError', () => {
    it('should be defined', () => {
        expect(
            new AppError({
                message: 'Testing',
            }),
        ).toBeDefined();
    });
});
