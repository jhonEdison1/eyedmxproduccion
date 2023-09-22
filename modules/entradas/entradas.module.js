"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradasModule = void 0;
const common_1 = require("@nestjs/common");
const entradas_service_1 = require("./entradas.service");
const entradas_controller_1 = require("./entradas.controller");
const mongoose_1 = require("@nestjs/mongoose");
const entrada_entity_1 = require("./entities/entrada.entity");
const iam_module_1 = require("../iam/iam.module");
let EntradasModule = class EntradasModule {
};
EntradasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: entrada_entity_1.Entrada.name, schema: entrada_entity_1.EntradaSchema }]),
            iam_module_1.IamModule
        ],
        controllers: [entradas_controller_1.EntradasController],
        providers: [entradas_service_1.EntradasService],
        exports: [entradas_service_1.EntradasService]
    })
], EntradasModule);
exports.EntradasModule = EntradasModule;
//# sourceMappingURL=entradas.module.js.map