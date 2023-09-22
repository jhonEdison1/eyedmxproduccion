"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertioModule = void 0;
const common_1 = require("@nestjs/common");
const convertio_service_1 = require("./convertio.service");
const convertio_controller_1 = require("./convertio.controller");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const parametros_module_1 = require("../parametros/parametros.module");
let ConvertioModule = class ConvertioModule {
};
ConvertioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            axios_1.HttpModule,
            parametros_module_1.ParametrosModule
        ],
        controllers: [convertio_controller_1.ConvertioController],
        providers: [convertio_service_1.ConvertioService],
        exports: [convertio_service_1.ConvertioService]
    })
], ConvertioModule);
exports.ConvertioModule = ConvertioModule;
//# sourceMappingURL=convertio.module.js.map