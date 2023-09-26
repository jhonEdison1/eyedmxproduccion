import { CreateManillaDto } from './create-manilla.dto';
import { estadoManilla } from "../entities/manilla.entity";
import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
declare const UpdateManillaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateManillaDto>>;
export declare class UpdateManillaDto extends UpdateManillaDto_base {
    estado: estadoManilla;
}
export declare class EditManillaDto {
    readonly contacto_de_emergencia: string;
    readonly telefono_de_emergencia: string;
    foto_portador: string;
    licencia: string;
    matricula_o_tarjeta: string;
    factura: string;
    seguro: string;
    tenencias: string;
    historia_clinica: string;
    archivos: string;
    otros: object;
}
export declare class EditManillaMoteroDto extends EditManillaDto {
    readonly nombre_portador: string;
    readonly documento: string;
    readonly fecha_nacimiento: Date;
    readonly genero: string;
    readonly email: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly rh: string;
    readonly alergias: string;
    readonly marca: string;
    readonly cilindraje: number;
    readonly compañia_de_seguros: string;
    readonly centro_de_salud: string;
    readonly placa: string;
}
export declare class EditManillaAdulto_MayorDto extends EditManillaDto {
    readonly nombre_portador: string;
    readonly documento: string;
    readonly fecha_nacimiento: Date;
    readonly genero: string;
    readonly email: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly rh: string;
    readonly alergias: string;
    readonly enfermedades: string;
    readonly centro_de_salud: string;
    readonly recomendaciones: string;
}
export declare class AtLeastOneIsRequiredConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function AtLeastOneIsRequired(fields: string[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare class EditManillaNiñoDto extends EditManillaDto {
    readonly nombre_portador: string;
    readonly documento: string;
    readonly fecha_nacimiento: Date;
    readonly genero: string;
    readonly email: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly rh: string;
    readonly alergias: string;
    readonly enfermedades: string;
    readonly centro_de_salud: string;
    readonly recomendaciones: string;
    readonly nombre_padre: string;
    readonly nombre_madre: string;
    readonly telefono_padre: string;
    readonly telefono_madre: string;
}
export declare class EditManillaMascotaDto extends EditManillaDto {
    readonly nombre_duenio: string;
    readonly nombre_mascota: string;
    readonly email: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly enfermedades: string;
    readonly centro_de_salud: string;
    readonly fecha_nacimiento_mascota: Date;
    readonly raza: string;
}
export declare class EditManillaDeportistaDto extends EditManillaDto {
    readonly nombre_portador: string;
    readonly documento: string;
    readonly fecha_nacimiento: Date;
    readonly genero: string;
    readonly email: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly rh: string;
    readonly alergias: string;
    readonly deporte: string;
    readonly compañia_de_seguros: string;
    readonly centro_de_salud: string;
}
export {};
