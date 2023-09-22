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
exports.ErrorsLoggerController = void 0;
const common_1 = require("@nestjs/common");
const error_logger_service_1 = require("./error-logger.service");
const swagger_1 = require("@nestjs/swagger");
let ErrorsLoggerController = class ErrorsLoggerController {
    constructor(errorLoggerService) {
        this.errorLoggerService = errorLoggerService;
    }
    getAllErrorLog() {
        const errorList = this.errorLoggerService.getAllErrorLogs();
        return { errorList };
    }
    clearAllErrorLog() {
        return this.errorLoggerService.clearErrorLog();
    }
};
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorsLoggerController.prototype, "getAllErrorLog", null);
__decorate([
    (0, common_1.Post)("clear"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorsLoggerController.prototype, "clearAllErrorLog", null);
ErrorsLoggerController = __decorate([
    (0, swagger_1.ApiTags)('errors'),
    (0, common_1.Controller)('error-log'),
    __metadata("design:paramtypes", [error_logger_service_1.ErrorLoggerService])
], ErrorsLoggerController);
exports.ErrorsLoggerController = ErrorsLoggerController;
//# sourceMappingURL=errors.controller.js.map