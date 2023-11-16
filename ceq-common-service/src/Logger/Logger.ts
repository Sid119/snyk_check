import { Logger as NestLogger } from '@nestjs/common';

export class Logger extends NestLogger {
    // Custom log
    logWithTimestamp(message: string) {
        const timestamp = new Date().toISOString();
        super.log(`[${timestamp}] ${message}`);
    }

    // Custom error
    errorWithTimestamp(message: string, trace: string) {
        const timestamp = new Date().toISOString();
        super.error(`[${timestamp}] ${message}`, trace);
    }

    // Custom warn
    warnWithTimestamp(message: string) {
        const timestamp = new Date().toISOString();
        super.warn(`[${timestamp}] ${message}`);
    }

    // Custom info
    infoWithTimestamp(message: string) {
        const timestamp = new Date().toISOString();
        super.log(`[${timestamp}] [INFO] ${message}`);
    }

    // Custom debug
    debugWithTimestamp(message: string) {
        const timestamp = new Date().toISOString();
        super.debug(`[${timestamp}] [DEBUG] ${message}`);
    }

    // Custom verbose
    verboseWithTimestamp(message: string) {
        const timestamp = new Date().toISOString();
        super.verbose(`[${timestamp}] [VERBOSE] ${message}`);
    }
}
