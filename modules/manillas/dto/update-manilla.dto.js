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
exports.EditManillaMascotaDto = exports.EditManillaNiñoDto = exports.AtLeastOneIsRequired = exports.AtLeastOneIsRequiredConstraint = exports.EditManillaAdulto_MayorDto = exports.EditManillaMoteroDto = exports.EditManillaDto = exports.UpdateManillaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_manilla_dto_1 = require("./create-manilla.dto");
const manilla_entity_1 = require("../entities/manilla.entity");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateManillaDto extends (0, mapped_types_1.PartialType)(create_manilla_dto_1.CreateManillaDto) {
}
__decorate([
    (0, class_validator_1.IsEnum)(manilla_entity_1.estadoManilla),
    (0, swagger_1.ApiProperty)({ description: "estado de la manilla", type: String }),
    __metadata("design:type", String)
], UpdateManillaDto.prototype, "estado", void 0);
exports.UpdateManillaDto = UpdateManillaDto;
class EditManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaDto.prototype, "licencia", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaDto.prototype, "matricula_o_tarjeta", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaDto.prototype, "factura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaDto.prototype, "seguro", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaDto.prototype, "tenencias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], EditManillaDto.prototype, "otros", void 0);
exports.EditManillaDto = EditManillaDto;
class EditManillaMoteroDto extends EditManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], EditManillaMoteroDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaMoteroDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaMoteroDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditManillaMoteroDto.prototype, "cilindraje", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaMoteroDto.prototype, "compa\u00F1ia_de_seguros", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaMoteroDto.prototype, "centro_de_salud", void 0);
exports.EditManillaMoteroDto = EditManillaMoteroDto;
class EditManillaAdulto_MayorDto extends EditManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaAdulto_MayorDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaAdulto_MayorDto.prototype, "email", void 0);
exports.EditManillaAdulto_MayorDto = EditManillaAdulto_MayorDto;
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
class EditManillaNiñoDto extends EditManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "centro_de_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "recomendaciones", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "nombre_padre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "nombre_madre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "telefono_padre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaNiñoDto.prototype, "telefono_madre", void 0);
exports.EditManillaNiñoDto = EditManillaNiñoDto;
class EditManillaMascotaDto extends EditManillaDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaMascotaDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditManillaMascotaDto.prototype, "centro_de_salud", void 0);
exports.EditManillaMascotaDto = EditManillaMascotaDto;
//# sourceMappingURL=update-manilla.dto.js.map