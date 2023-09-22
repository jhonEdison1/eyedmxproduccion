"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametrosModule = void 0;
const common_1 = require("@nestjs/common");
const parametros_service_1 = require("./parametros.service");
const parametros_controller_1 = require("./parametros.controller");
const mongoose_1 = require("@nestjs/mongoose");
const parametro_entity_1 = require("./entities/parametro.entity");
let ParametrosModule = class ParametrosModule {
};
ParametrosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: parametro_entity_1.Parametro.name, schema: parametro_entity_1.ParametroSchema }]),
        ],
        controllers: [parametros_controller_1.ParametrosController],
        providers: [parametros_service_1.ParametrosService],
        exports: [parametros_service_1.ParametrosService]
    })
], ParametrosModule);
exports.ParametrosModule = ParametrosModule;
//# sourceMappingURL=parametros.module.js.map