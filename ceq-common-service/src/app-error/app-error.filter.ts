import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AppError } from './app-error';
import { Response } from 'express';

/**
 * This filter is for handling AppError exception so it throws
 * appropriate response.
 *
 * @public
 */
@Catch(AppError)
export class AppErrorFilter implements ExceptionFilter {
    catch(error: AppError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const statusCode = error.statusCode;
        const message = error.message;
        response.status(statusCode).json({
            statusCode,
            message,
        });
    }
}
