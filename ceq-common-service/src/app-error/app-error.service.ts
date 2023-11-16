import { HttpStatus, Injectable } from '@nestjs/common';
import { AppError, AppErrorType } from './app-error';

/**
 * This service is used to create AppError from any kind of error
 * generated from the system. It can take any kind of variable and
 * create appropriate AppError instance for it.
 *
 * @public
 */
@Injectable()
export class AppErrorService {
    /**
     * This service is used to create AppError from any kind
     *
     * @param err Error of any kind
     * @param statusCode Custom error code to send to as HttpException
     * @param log If you want to log the error
     * @public
     */
    createAppError(
        err: AppErrorType | Error | string | any,
        statusCode?: HttpStatus,
        log?: boolean,
    ) {
        let error: AppError;
        if (err instanceof Error) {
            error = new AppError({
                message: err.message,
                log: log || true,
                statusCode: statusCode || HttpStatus.BAD_REQUEST,
                src: err.toString(),
            });
        } else if (typeof err === 'string') {
            error = new AppError({
                message: err,
                log: log || true,
                statusCode: statusCode || HttpStatus.BAD_REQUEST,
                src: err.toString(),
            });
        } else if (!err.message && !err.statusCode) {
            error = new AppError(err);
        } else {
            error = new AppError({
                message: 'Invalid request',
                log: log || true,
                statusCode: statusCode || HttpStatus.FORBIDDEN,
                src: err.toString(),
            });
        }
        return error;
    }
}
