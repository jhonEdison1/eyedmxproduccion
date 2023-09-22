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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const authentication_common_service_1 = require("./authentication.common.service");
const errors_service_1 = require("../../errors/errors.service");
let AuthenticationService = class AuthenticationService {
    constructor(authcommonService, errorService) {
        this.authcommonService = authcommonService;
        this.errorService = errorService;
    }
    async signIn(payload) {
        try {
            const isAceppted = await this.authcommonService.isAcepted(payload.id);
            if (!isAceppted) {
                throw new Error("El usuario no ha sido aceptado");
            }
            const data = { id: payload.id, role: payload.role };
            const [accessToken, refreshToken] = await Promise.all([
                this.authcommonService.generateJwtAccessToken(data),
                this.authcommonService.generateJwtRefreshoken(data)
            ]);
            return {
                message: "Acceso autorizado",
                accessToken,
                refreshToken,
                user: payload
            };
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async generateNewAccessToken(payload, refreshToken) {
        try {
            const data = { id: payload.id, role: payload.role };
            const accesstoken = await this.authcommonService.generateJwtAccessToken(data);
            const user = await this.authcommonService.findUserAutenticated(payload.id);
            return {
                message: "Acceso autorizado",
                accesstoken,
                refreshToken,
                user
            };
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async forgotPassword(email) {
        try {
            const user = await this.authcommonService.findUserByEmail(email);
            if (!user) {
                throw new Error("El usuario no existe");
            }
            const token = await this.authcommonService.generateTokenForgotPassword(user.id);
            await this.authcommonService.sendEmailForgotPassword(user.email, token);
            await this.authcommonService.updateTokenReset(user.id, token);
            return {
                message: "Se ha enviado un correo con el codigo de verificacion"
            };
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async resetPassword(token, password) {
        try {
            if (!token || !password || token === "" || password === "" || token === undefined || password === undefined || token === null || password === null) {
                throw new common_1.ConflictException("Faltan datos");
            }
            const user = await this.authcommonService.findUserByTokenReset(token);
            if (!user) {
                throw new Error("El usuario no existe");
            }
            await this.authcommonService.resetPassword(user.id, password);
            await this.authcommonService.updateTokenReset(user.id, null);
            return {
                message: "Se ha cambiado la contraseña"
            };
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [authentication_common_service_1.AuthenticationCommonService,
        errors_service_1.ErrorsService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map