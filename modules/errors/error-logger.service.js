"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston = require("winston");
const fs = require("fs");
let ErrorLoggerService = class ErrorLoggerService {
    constructor() {
        this.logger = winston.createLogger({
            level: 'error',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            transports: [
                new winston.transports.File({ filename: 'logs/error.log' })
            ]
        });
    }
    CreateErrorLog(message, trace) {
        this.logger.error(message, trace);
    }
    getAllErrorLogs() {
        try {
            const errorLogsContent = fs.readFileSync('logs/error.log', 'utf8');
            const errorLogsLines = errorLogsContent.split('\n');
            const jsonObjectArray = errorLogsLines
                .filter(jsonString => jsonString.trim() !== '')
                .map((jsonString) => JSON.parse(jsonString.replace(/\r/g, "")));
            return jsonObjectArray;
        }
        catch (error) {
            this.CreateErrorLog("No se pudo acceder al archivo error.log", common_1.HttpStatus.REQUEST_TIMEOUT);
        }
    }
    clearErrorLog() {
        const filePath = "logs/error.log";
        try {
            fs.writeFileSync(filePath, "");
            return { messge: "el contenido se elimino correctamente" };
        }
        catch (error) {
            this.CreateErrorLog("error al borrar el contecnido del archivo de registro de errores", common_1.HttpStatus.REQUEST_TIMEOUT);
            return;
        }
    }
};
ErrorLoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ErrorLoggerService);
exports.ErrorLoggerService = ErrorLoggerService;
//# sourceMappingURL=error-logger.service.js.map