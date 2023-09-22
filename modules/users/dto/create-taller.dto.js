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
exports.CreateUserTallerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserTallerDto {
}
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "El campo debe ser un email válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El email es requerido" }),
    (0, swagger_1.ApiProperty)({ description: "Email del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "La contraseña debe contener caracteres válidos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "La contraseña es requerida" }),
    (0, class_validator_1.MinLength)(6, { message: "La contraseña debe contener al menos 6 caracteres" }),
    (0, class_validator_1.MaxLength)(20, { message: "La contraseña debe contener menos de 20 caracteres" }),
    (0, swagger_1.ApiProperty)({ description: "Contraseña del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre debe contener caracteres válidos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre es requerido" }),
    (0, class_validator_1.MinLength)(3, { message: "El nombre debe contener al menos 3 caracteres" }),
    (0, swagger_1.ApiProperty)({ description: "Nombre del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El rol debe contener caracteres válidos" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: "Rol del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El telefono debe contener caracteres válidos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El telefono es requerido" }),
    (0, class_validator_1.MinLength)(10, { message: "El telefono debe contener al menos 10 caracteres" }),
    (0, swagger_1.ApiProperty)({ description: "Telefono del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "La dirección debe contener caracteres válidos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "La dirección es requerida" }),
    (0, swagger_1.ApiProperty)({ description: "Dirección del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: "Foto del usuario", type: String }),
    __metadata("design:type", String)
], CreateUserTallerDto.prototype, "fotoBase64", void 0);
exports.CreateUserTallerDto = CreateUserTallerDto;
//# sourceMappingURL=create-taller.dto.js.map