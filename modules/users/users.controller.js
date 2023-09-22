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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const mongo_id_pipe_1 = require("../../common/pipes/mongo-id.pipe");
const jwt_auth_guard_1 = require("../iam/guards/jwt-auth.guard");
const dto_1 = require("./dto");
const decorators_1 = require("../iam/decorators");
const roles_model_1 = require("../iam/models/roles.model");
const roles_guard_1 = require("../iam/guards/roles.guard");
const create_taller_dto_1 = require("./dto/create-taller.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(payload) {
        return this.usersService.create(payload);
    }
    singupTaller(payload) {
        return this.usersService.singupTaller(payload);
    }
    createTaller(payload) {
        return this.usersService.createTaller(payload);
    }
    getKpi(fechaInicio, fechaFin) {
        return this.usersService.getKpi(fechaInicio, fechaFin);
    }
    findOneCliente(id) {
        return this.usersService.findOneCliente(id);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findAllUsers(filter) {
        return this.usersService.findAllUsersClients(filter);
    }
    findAllTalleres(filter) {
        return this.usersService.findAllUsersTalleres(filter);
    }
    findOneTaller(id) {
        return this.usersService.findOneTaller(id);
    }
    aceptarTaller(id) {
        return this.usersService.aceptarTaller(id);
    }
    findAllTalleresAceptados(filter) {
        return this.usersService.findAllUsersTalleresAceptados(filter);
    }
    findAllTalleresPendientes(filter) {
        return this.usersService.findAllUsersTalleresPendientes(filter);
    }
    update(id, updateUserDto, req) {
        return this.usersService.updateCliente(id, updateUserDto, req.user);
    }
    changePassword(payload, req) {
        return this.usersService.changePassword(req.user.id, payload);
    }
};
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('singup/taller'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_taller_dto_1.CreateUserTallerDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "singupTaller", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)('create/taller'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_taller_dto_1.CreateUserTallerDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createTaller", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('Kpi'),
    __param(0, (0, common_1.Query)('fechaInicio')),
    __param(1, (0, common_1.Query)('fechaFin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getKpi", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('cliente/:id'),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneCliente", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.USER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('All/clientes'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterUsersDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('All/talleres'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterUsersDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllTalleres", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('taller/:id'),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneTaller", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)('taller/aceptar/:id'),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "aceptarTaller", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('All/talleres/aceptados'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterUsersDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllTalleresAceptados", null);
__decorate([
    (0, decorators_1.Roles)(roles_model_1.Role.ADMIN),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('All/talleres/pendientes'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterUsersDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllTalleresPendientes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    (0, common_1.Patch)('editarUsuario/:id'),
    __param(0, (0, common_1.Param)('id', mongo_id_pipe_1.MongoIdPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthAccessGuard),
    (0, common_1.Patch)('ChangePassword'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePassword", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map