"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManillasModule = void 0;
const common_1 = require("@nestjs/common");
const manillas_service_1 = require("./manillas.service");
const manillas_controller_1 = require("./manillas.controller");
const manilla_entity_1 = require("./entities/manilla.entity");
const mongoose_1 = require("@nestjs/mongoose");
const iam_module_1 = require("../iam/iam.module");
const config_1 = require("@nestjs/config");
const entradas_module_1 = require("../entradas/entradas.module");
const mail_module_1 = require("../mail/mail.module");
const convertio_module_1 = require("../convertio/convertio.module");
let ManillasModule = class ManillasModule {
};
ManillasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([{ name: manilla_entity_1.Manilla.name, schema: manilla_entity_1.ManillaSchema }]),
            iam_module_1.IamModule,
            entradas_module_1.EntradasModule,
            mail_module_1.MailModule,
            convertio_module_1.ConvertioModule
        ],
        controllers: [manillas_controller_1.ManillasController],
        providers: [manillas_service_1.ManillasService],
        exports: [manillas_service_1.ManillasService]
    })
], ManillasModule);
exports.ManillasModule = ManillasModule;
//# sourceMappingURL=manillas.module.js.map