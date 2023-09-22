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
exports.ErrorsService = void 0;
const common_1 = require("@nestjs/common");
const error_logger_service_1 = require("./error-logger.service");
let ErrorsService = class ErrorsService {
    constructor(errorLoggerService) {
        this.errorLoggerService = errorLoggerService;
    }
    createError(error) {
        this.errorLoggerService.CreateErrorLog('Error en el catch', error);
        if (error.name === "MongoServerError" && error.code === 11000) {
            throw new common_1.ConflictException(`EL ${Object.keys(error.keyValue)} que intentas registrar ya existe`);
        }
        else {
            throw new common_1.ConflictException(error.message);
        }
    }
};
ErrorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [error_logger_service_1.ErrorLoggerService])
], ErrorsService);
exports.ErrorsService = ErrorsService;
//# sourceMappingURL=errors.service.js.map