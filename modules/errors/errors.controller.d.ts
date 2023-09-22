import { ErrorLoggerService } from './error-logger.service';
export declare class ErrorsLoggerController {
    private readonly errorLoggerService;
    constructor(errorLoggerService: ErrorLoggerService);
    getAllErrorLog(): {
        errorList: string[];
    };
    clearAllErrorLog(): {
        messge: string;
    };
}
