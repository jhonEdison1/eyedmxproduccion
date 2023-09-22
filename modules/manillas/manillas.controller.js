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
exports.ManillasController = void 0;
const common_1 = require("@nestjs/common");
const manillas_service_1 = require("./manillas.service");
const create_manilla_dto_1 = require("./dto/create-manilla.dto");
const update_manilla_dto_1 = require("./dto/update-manilla.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../iam/guards/jwt-auth.guard");
const decorators_1 = require("../iam/decorators");
const roles_model_1 = require("../iam/models/roles.model");
const roles_guard_1 = require("../iam/guards/roles.guard");
const filter_manilla_dto_1 = require("./dto/filter-manilla.dto");
const ids_aprobar_dto_1 = require("./dto/ids-aprobar.dto");
const create_entrada_dto_1 = require("../entradas/dto/create-entrada.dto");
const manilla_entity_1 = require("./entities/manilla.entity");
let ManillasController = class ManillasController {
    constructor(manillasService) {
        this.manillasService = manillasService;
    }
    create(createManillaDto, req) {
        return this.manillasService.createManilla(createManillaDto, req.user.id);
    }
    createVarias(createManillaDto, req) {
        return this.manillasService.solicitarVarias(createManillaDto, req.user.id);
    }
    updateManilla(id, editManilla, req) {
        return this.manillasService.editManilla(id, editManilla, req.user.id);
    }
    findSolicitudes(params) {
        return this.manillasService.findSolicitudes(params);
    }
    findAceptadas(params) {
        return this.manillasService.findAceptadasHoy(params);
    }
    findAll(params) {
        return this.manillasService.findAll(params);
    }
    getEstados() {
        return this.manillasService.getEstados();
    }
    aprobar(id) {
        return this.manillasService.aceptarManilla(id);
    }
    aprobarTodas() {
        return this.manillasService.aceptarTodasLasManillas();
    }
    enviar(id, estado) {
        return this.manillasService.cambiarEstadoManilla(id, estado);
    }
    enviarVarias(body, estado) {
        return this.manillasService.cambiarestadoVarias(body.ids, estado);
    }
    aprobarVarias(body) {
        return this.manillasService.aceptarVariasManillas(body.ids);
    }
    findOne(id) {
        return this.manillasService.findById(id);
    }
    update(id, updateManillaDto) {
        return this.manillasService.update(+id, updateManillaDto);
    }
    findMisManillas(req, filter) {
        return this.manillasService.obtenerMisManillasAgrupadasPorTipo(req.user.id, filter);
    }
    obtenerInfoMotoPorPlaca(placa, req) {
        return this.manillasService.obtenerInfoMotoPorPlaca(placa, req.user.id);
    }
    crearEntrada(placa, body, req) {
        return this.manillasService.crearEntradaManilla(placa, body, req.user.id);
    }
    actualizarPago(id, pagoId) {
        return this.manillasService.actualizarPago(id, pagoId);
    }
    obtenerReporteTotal() {
        return this.manillasService.obtenerReporteTotal();
    }
    getManillaByIdPago(pagoId) {
        return this.manillasService.getManillaByIdPago(pagoId);
    }
    remove(id) {
        return this.manillasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('solicitar'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manilla_dto_1.CreateManillaDto, Object]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('solicitarVarias'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Body)('manillas')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "createVarias", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_manilla_dto_1.EditManillaDto, Object]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "updateManilla", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('solicitudes'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_manilla_dto_1.FilterManillaDto]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "findSolicitudes", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('produccion'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_manilla_dto_1.FilterManillaDto]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "findAceptadas", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('findAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_manilla_dto_1.FilterManillaDto]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('estados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "getEstados", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)('aprobar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "aprobar", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)('aprobarTodas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "aprobarTodas", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)('cambiarEstado/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "enviar", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)('cambiarEstadoVarias'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ids_aprobar_dto_1.IdsAprobarDto, String]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "enviarVarias", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)('aprobarVarias'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ids_aprobar_dto_1.IdsAprobarDto]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "aprobarVarias", null);
__decorate([
    (0, common_1.Get)('findById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_manilla_dto_1.UpdateManillaDto]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    (0, common_1.Get)('MisManillas'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_manilla_dto_1.FilterManillaDto]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "findMisManillas", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.TALLER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('ObtenerInfoMotoPorPlaca/:placa'),
    __param(0, (0, common_1.Param)('placa')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "obtenerInfoMotoPorPlaca", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.TALLER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)('crearEntrada/:placa'),
    __param(0, (0, common_1.Param)('placa')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_entrada_dto_1.CreateEntradaDto, Object]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "crearEntrada", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    (0, common_1.Patch)('actualizarPago/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('pagoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "actualizarPago", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('ObtenerReporteTotal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "obtenerReporteTotal", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    (0, common_1.Get)('getManillaByIdPago'),
    __param(0, (0, common_1.Query)('pagoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "getManillaByIdPago", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManillasController.prototype, "remove", null);
ManillasController = __decorate([
    (0, swagger_1.ApiTags)("manillas"),
    (0, common_1.Controller)('manillas'),
    __metadata("design:paramtypes", [manillas_service_1.ManillasService])
], ManillasController);
exports.ManillasController = ManillasController;
//# sourceMappingURL=manillas.controller.js.map