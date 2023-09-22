import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
export declare class CreateManillaDto {
    userId: string;
    readonly contacto_de_emergencia: string;
    readonly telefono_de_emergencia: string;
    tipo: string;
    readonly foto_portador: string;
    color: string;
    readonly licencia: string;
    readonly matricula_o_tarjeta: string;
    readonly factura: string;
    readonly seguro: string;
    readonly tenencias: string;
    pagoId: string;
    otros: object;
}
export declare class ManillaMoteroDto extends CreateManillaDto {
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
export declare class ManillaAdulto_MayorDto extends CreateManillaDto {
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
export declare class ManillaNiñoDto extends CreateManillaDto {
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
export declare class ManillaMascotaDto extends CreateManillaDto {
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
