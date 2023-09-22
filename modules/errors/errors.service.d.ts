import { ErrorLoggerService } from './error-logger.service';
export declare class ErrorsService {
    private readonly errorLoggerService;
    constructor(errorLoggerService: ErrorLoggerService);
    createError(error: any): void;
}
