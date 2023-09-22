"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const config_1 = require("@nestjs/config");
const enviroments_1 = require("./common/enviroments");
const config_2 = require("./config");
const Joi = require("joi");
const users_module_1 = require("./modules/users/users.module");
const iam_module_1 = require("./modules/iam/iam.module");
const errors_module_1 = require("./modules/errors/errors.module");
const manillas_module_1 = require("./modules/manillas/manillas.module");
const pagos_module_1 = require("./modules/pagos/pagos.module");
const tipos_module_1 = require("./modules/tipos/tipos.module");
const convertio_module_1 = require("./modules/convertio/convertio.module");
const parametros_module_1 = require("./modules/parametros/parametros.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "dev"],
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_PORT: Joi.number().required(),
                })
            }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            errors_module_1.ErrorsModule,
            iam_module_1.IamModule,
            manillas_module_1.ManillasModule,
            pagos_module_1.PagosModule,
            tipos_module_1.TiposModule,
            convertio_module_1.ConvertioModule,
            parametros_module_1.ParametrosModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map