export declare class ErrorLoggerService {
    private logger;
    constructor();
    CreateErrorLog(message: string, trace?: any | string): void;
    getAllErrorLogs(): string[];
    clearErrorLog(): {
        messge: string;
    };
}
