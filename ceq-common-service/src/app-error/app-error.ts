import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * This interface provides basic structure of AppError
 * object. An AppError object must contain these values.
 * @public
 */
export interface AppErrorType {
    /** Message for the AppError */
    message: string;

    /** Custom Status code for AppError */
    statusCode?: HttpStatus;

    /** Enable this if you want to log the error */
    log?: boolean;

    /** Error converted to a string for reference */
    src?: string;
}

/**
 * This class is responsible to create AppError Object.
 * @public
 */
export class AppError implements AppErrorType {
    private _message: string;
    private _statusCode?: HttpStatus;
    private _log?: boolean;

    constructor(props: AppErrorType) {
        this._message = props.message;
        this._statusCode = props.statusCode;
        this._log = props.log;
    }

    /**
     * Message for the Error
     */
    public get message() {
        return this._message;
    }

    /**
     * Status code for the error {@link ceq-common-service.app-error/app-error.AppError}
     */
    public get statusCode() {
        return this._statusCode;
    }

    /**
     * If you want to log this error
     */
    public get log() {
        return this._log;
    }

    /**
     * @returns AppError instance in form of JSON string
     */
    toString() {
        return JSON.stringify({
            message: this.message,
            statusCode: this.statusCode,
        });
    }

    /**
     * @returns AppError instance in form
     */
    res() {
        return new HttpException(
            this.message,
            this.statusCode || HttpStatus.BAD_REQUEST,
        );
    }
}
