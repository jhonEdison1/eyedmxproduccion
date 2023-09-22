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
exports.InfoEntradaDto = exports.CreateEntradaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEntradaDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "las observaciones deben contener caracteres validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "las observaciones son requeridas" }),
    __metadata("design:type", String)
], CreateEntradaDto.prototype, "observaciones", void 0);
exports.CreateEntradaDto = CreateEntradaDto;
class InfoEntradaDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "el taller debe contener caracteres validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "el taller es requerido" }),
    __metadata("design:type", String)
], InfoEntradaDto.prototype, "taller", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "las observaciones deben contener caracteres validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "las observaciones son requeridas" }),
    __metadata("design:type", String)
], InfoEntradaDto.prototype, "observaciones", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "la placa debe contener caracteres validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "la placa es requerida" }),
    __metadata("design:type", String)
], InfoEntradaDto.prototype, "placa", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "la manilla debe contener caracteres validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "la manilla es requerida" }),
    __metadata("design:type", String)
], InfoEntradaDto.prototype, "manilla", void 0);
exports.InfoEntradaDto = InfoEntradaDto;
//# sourceMappingURL=create-entrada.dto.js.map