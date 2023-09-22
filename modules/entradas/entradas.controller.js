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
exports.EntradasController = void 0;
const common_1 = require("@nestjs/common");
const entradas_service_1 = require("./entradas.service");
const update_entrada_dto_1 = require("./dto/update-entrada.dto");
const decorators_1 = require("../iam/decorators");
const roles_model_1 = require("../iam/models/roles.model");
const jwt_auth_guard_1 = require("../iam/guards/jwt-auth.guard");
const roles_guard_1 = require("../iam/guards/roles.guard");
const filte_entrada_dto_1 = require("./dto/filte-entrada.dto");
const swagger_1 = require("@nestjs/swagger");
let EntradasController = class EntradasController {
    constructor(entradasService) {
        this.entradasService = entradasService;
    }
    findAll(req, params) {
        return this.entradasService.findMisEntradas(params, req.user.id);
    }
    findOne(id) {
        return this.entradasService.findOne(+id);
    }
    update(id, updateEntradaDto) {
        return this.entradasService.update(+id, updateEntradaDto);
    }
    remove(id) {
        return this.entradasService.remove(+id);
    }
};
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.TALLER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('MisEntradas'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filte_entrada_dto_1.FilterEntradaDto]),
    __metadata("design:returntype", void 0)
], EntradasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntradasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entrada_dto_1.UpdateEntradaDto]),
    __metadata("design:returntype", void 0)
], EntradasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntradasController.prototype, "remove", null);
EntradasController = __decorate([
    (0, swagger_1.ApiTags)("entradas"),
    (0, common_1.Controller)('entradas'),
    __metadata("design:paramtypes", [entradas_service_1.EntradasService])
], EntradasController);
exports.EntradasController = EntradasController;
//# sourceMappingURL=entradas.controller.js.map