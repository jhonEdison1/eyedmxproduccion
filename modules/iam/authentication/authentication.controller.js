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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authentication_common_service_1 = require("./authentication.common.service");
const local_auth_guard_1 = require("../guards/local-auth.guard");
const authentication_service_1 = require("./authentication.service");
const jwt_auth_refresh_guard_1 = require("../guards/jwt-auth-refresh.guard");
const reset_passwor_dto_1 = require("./dto/reset-passwor.dto");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationCommonService, authService) {
        this.authenticationCommonService = authenticationCommonService;
        this.authService = authService;
    }
    async signIn(req) {
        const user = req.user;
        return await this.authService.signIn(user);
    }
    async existUser(email) {
        return await this.authenticationCommonService.existUser(email);
    }
    async forgotPassword(email) {
        return await this.authService.forgotPassword(email);
    }
    async resetPassword(body) {
        return await this.authService.resetPassword(body.token, body.password);
    }
    async refreshToken(req) {
        const user = req.user;
        const refreshToken = req.headers.authorization.split(" ")[1];
        return await this.authService.generateNewAccessToken(user, refreshToken);
    }
    async getFields(type) {
        return await this.authenticationCommonService.getFields(type);
    }
    async getTypes() {
        return await this.authenticationCommonService.getTypes();
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)("signin"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('existUser'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "existUser", null);
__decorate([
    (0, common_1.Get)("forgotpassword"),
    __param(0, (0, common_1.Query)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)("resetpassword"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_passwor_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_refresh_guard_1.JwtAuthRefreshGuard),
    (0, common_1.Get)("refresh"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)("fields"),
    (0, swagger_1.ApiQuery)({ name: "type", required: true }),
    __param(0, (0, common_1.Query)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "getFields", null);
__decorate([
    (0, common_1.Get)("types"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "getTypes", null);
AuthenticationController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("authentication"),
    __metadata("design:paramtypes", [authentication_common_service_1.AuthenticationCommonService,
        authentication_service_1.AuthenticationService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map