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
exports.ManillaDeportistaDto = exports.ManillaMascotaDto = exports.ManillaNiñoDto = exports.AtLeastOneIsRequired = exports.AtLeastOneIsRequiredConstraint = exports.ManillaAdulto_MayorDto = exports.ManillaMoteroDto = exports.CreateManillaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateManillaDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)({ message: "El id del usuario debe ser válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El id del usuario es requerido" }),
    (0, swagger_1.ApiProperty)({ description: "Id del usuario", type: String }),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "el contacto de emergencia debe contener datos validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "el contacto de emergencia es requerido" }),
    (0, swagger_1.ApiProperty)({ description: "nombre de un contacto de emergencia", type: String }),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "contacto_de_emergencia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "el telefono de emergencia debe contener datos validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "el telefono de emergencia es requerido" }),
    (0, swagger_1.ApiProperty)({ description: "telefono de un contacto de emergencia", type: String }),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "telefono_de_emergencia", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "el tipo debe contener datos validos" }),
    (0, class_validator_1.IsNotEmpty)({ message: "el tipo es requerido" }),
    (0, swagger_1.ApiProperty)({ description: " tipo  del portador de la manilla", type: String }),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "licencia", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "matricula_o_tarjeta", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "factura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "seguro", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "tenencias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "historia_clinica", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "archivos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateManillaDto.prototype, "pagoId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateManillaDto.prototype, "otros", void 0);
exports.CreateManillaDto = CreateManillaDto;
class ManillaMoteroDto extends CreateManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "nombre_portador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ManillaMoteroDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "rh", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "alergias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ManillaMoteroDto.prototype, "cilindraje", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "compa\u00F1ia_de_seguros", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "centro_de_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMoteroDto.prototype, "placa", void 0);
exports.ManillaMoteroDto = ManillaMoteroDto;
class ManillaAdulto_MayorDto extends CreateManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "nombre_portador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ManillaAdulto_MayorDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "rh", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "alergias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "enfermedades", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "centro_de_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaAdulto_MayorDto.prototype, "recomendaciones", void 0);
exports.ManillaAdulto_MayorDto = ManillaAdulto_MayorDto;
let AtLeastOneIsRequiredConstraint = class AtLeastOneIsRequiredConstraint {
    validate(value, args) {
        const fields = args.constraints;
        for (const field of fields) {
            if (args.object[field]) {
                return true;
            }
        }
        return false;
    }
    defaultMessage(args) {
        const fields = args.constraints;
        return `At least one of '${fields.join("' or '")}' is required.`;
    }
};
AtLeastOneIsRequiredConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'customValidation', async: false })
], AtLeastOneIsRequiredConstraint);
exports.AtLeastOneIsRequiredConstraint = AtLeastOneIsRequiredConstraint;
function AtLeastOneIsRequired(fields, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'atLeastOneIsRequired',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: fields,
            validator: AtLeastOneIsRequiredConstraint,
        });
    };
}
exports.AtLeastOneIsRequired = AtLeastOneIsRequired;
class ManillaNiñoDto extends CreateManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "nombre_portador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ManillaNiñoDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "rh", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "alergias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "enfermedades", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "centro_de_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "recomendaciones", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "nombre_padre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "nombre_madre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "telefono_padre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaNiñoDto.prototype, "telefono_madre", void 0);
exports.ManillaNiñoDto = ManillaNiñoDto;
class ManillaMascotaDto extends CreateManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "nombre_duenio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "nombre_mascota", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "enfermedades", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "centro_de_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ManillaMascotaDto.prototype, "fecha_nacimiento_mascota", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaMascotaDto.prototype, "raza", void 0);
exports.ManillaMascotaDto = ManillaMascotaDto;
class ManillaDeportistaDto extends CreateManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "nombre_portador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ManillaDeportistaDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "rh", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "alergias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "deporte", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "compa\u00F1ia_de_seguros", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManillaDeportistaDto.prototype, "centro_de_salud", void 0);
exports.ManillaDeportistaDto = ManillaDeportistaDto;
//# sourceMappingURL=create-manilla.dto.js.map