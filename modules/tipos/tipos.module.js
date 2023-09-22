"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposModule = void 0;
const common_1 = require("@nestjs/common");
const tipos_service_1 = require("./tipos.service");
const tipos_controller_1 = require("./tipos.controller");
const mongoose_1 = require("@nestjs/mongoose");
const tipo_entity_1 = require("./entities/tipo.entity");
let TiposModule = class TiposModule {
};
TiposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: tipo_entity_1.Tipo.name, schema: tipo_entity_1.TipoSchema }])
        ],
        controllers: [tipos_controller_1.TiposController],
        providers: [tipos_service_1.TiposService],
        exports: [tipos_service_1.TiposService]
    })
], TiposModule);
exports.TiposModule = TiposModule;
//# sourceMappingURL=tipos.module.js.map