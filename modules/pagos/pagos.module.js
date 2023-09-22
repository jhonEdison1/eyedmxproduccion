"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagosModule = void 0;
const common_1 = require("@nestjs/common");
const pagos_service_1 = require("./pagos.service");
const pagos_controller_1 = require("./pagos.controller");
const config_1 = require("@nestjs/config");
const pago_entity_1 = require("./entities/pago.entity");
const mongoose_1 = require("@nestjs/mongoose");
const iam_module_1 = require("../iam/iam.module");
const stripe_service_1 = require("./stripe.service");
const manillas_module_1 = require("../manillas/manillas.module");
let PagosModule = class PagosModule {
};
PagosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([{ name: pago_entity_1.Pago.name, schema: pago_entity_1.PagoSchema }]),
            iam_module_1.IamModule,
            manillas_module_1.ManillasModule
        ],
        controllers: [pagos_controller_1.PagosController],
        providers: [pagos_service_1.PagosService, stripe_service_1.StripeService],
        exports: [pagos_service_1.PagosService]
    })
], PagosModule);
exports.PagosModule = PagosModule;
//# sourceMappingURL=pagos.module.js.map