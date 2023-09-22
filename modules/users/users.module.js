"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const hashing_service_1 = require("../../providers/hashing/hashing.service");
const bcrypt_service_1 = require("../../providers/hashing/bcrypt.service");
const errors_module_1 = require("../errors/errors.module");
const iam_module_1 = require("../iam/iam.module");
const manillas_module_1 = require("../manillas/manillas.module");
const config_1 = require("@nestjs/config");
const mail_module_1 = require("../mail/mail.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }]),
            errors_module_1.ErrorsModule,
            iam_module_1.IamModule,
            manillas_module_1.ManillasModule,
            config_1.ConfigModule,
            mail_module_1.MailModule
        ],
        controllers: [users_controller_1.UsersController],
        providers: [
            {
                provide: hashing_service_1.HashingService,
                useClass: bcrypt_service_1.BcryptService
            },
            users_service_1.UsersService
        ],
        exports: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map