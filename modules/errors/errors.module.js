"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsModule = void 0;
const common_1 = require("@nestjs/common");
const errors_service_1 = require("./errors.service");
const error_logger_service_1 = require("./error-logger.service");
const errors_controller_1 = require("./errors.controller");
let ErrorsModule = class ErrorsModule {
};
ErrorsModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [errors_controller_1.ErrorsLoggerController],
        providers: [
            errors_service_1.ErrorsService,
            error_logger_service_1.ErrorLoggerService
        ],
        exports: [
            errors_service_1.ErrorsService,
            error_logger_service_1.ErrorLoggerService
        ]
    })
], ErrorsModule);
exports.ErrorsModule = ErrorsModule;
//# sourceMappingURL=errors.module.js.map