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
exports.PagosController = void 0;
const common_1 = require("@nestjs/common");
const pagos_service_1 = require("./pagos.service");
const create_pago_dto_1 = require("./dto/create-pago.dto");
const update_pago_dto_1 = require("./dto/update-pago.dto");
const jwt_auth_guard_1 = require("../iam/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../iam/decorators");
const roles_model_1 = require("../iam/models/roles.model");
const roles_guard_1 = require("../iam/guards/roles.guard");
const update_estado_pago_dto_1 = require("./dto/update-estado-pago.dto");
const filter_pago_dto_1 = require("./dto/filter-pago.dto");
const otros_pago_dto_1 = require("./dto/otros-pago.dto");
let PagosController = class PagosController {
    constructor(pagosService) {
        this.pagosService = pagosService;
    }
    create(createPagoDto) {
        try {
            return this.pagosService.create(createPagoDto);
        }
        catch (error) {
            return { error: error.message };
        }
    }
    findOne(id) {
        try {
            return this.pagosService.findOne(id);
        }
        catch (error) {
            return { error: error.message };
        }
    }
    update(id, updatePagoDto) {
        return this.pagosService.update(id, updatePagoDto);
    }
    confirmar(id) {
        return this.pagosService.confirmar(id);
    }
    actualizarPagoEfectivo(id, estado) {
        return this.pagosService.actualizarPagoEfectivo(id, estado);
    }
    getFilter(filter) {
        return this.pagosService.getFilter(filter);
    }
    updateIntento(id, updatePagoDto) {
        return this.pagosService.updateIntento(id, updatePagoDto);
    }
};
__decorate([
    (0, common_1.Post)('/crearIntento'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pago_dto_1.CreatePagoDto]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/obtenerIntento/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('generarMetodo/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pago_dto_1.UpdatePagoDto]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('confirmar/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "confirmar", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)('actualizarPagoEfectivo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estado_pago_dto_1.EstadoPagoDto]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "actualizarPagoEfectivo", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_pago_dto_1.FilterPagoDto]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "getFilter", null);
__decorate([
    (0, common_1.Patch)('actualizarIntento/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, otros_pago_dto_1.OtrosPagoDto]),
    __metadata("design:returntype", void 0)
], PagosController.prototype, "updateIntento", null);
PagosController = __decorate([
    (0, swagger_1.ApiTags)("pagos"),
    (0, common_1.Controller)('pagos'),
    __metadata("design:paramtypes", [pagos_service_1.PagosService])
], PagosController);
exports.PagosController = PagosController;
//# sourceMappingURL=pagos.controller.js.map