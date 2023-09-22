/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from "mongoose";
import { User } from "src/modules/users/entities/user.entity";
import { Tipos } from "src/modules/iam/authentication/authentication.common.service";
import { Pago } from "src/modules/pagos/entities/pago.entity";
export declare enum estadoManilla {
    Solicitada = "Solicitada",
    Aceptada = "Aceptada",
    Rechazada = "Rechazada",
    Enviada = "Enviada",
    Entregada = "Entregada"
}
export declare class Manilla extends Document {
    userId: User;
    contacto_de_emergencia: string;
    telefono_de_emergencia: string;
    tipo: Tipos;
    qrCode: string;
    qrdxf: string;
    numid: number;
    estado: estadoManilla;
    color: string;
    pagoId: Pago;
    otros: Object;
    estadoPago: boolean;
    entradas: Array<any>;
    nombre_portador: string;
    documento: string;
    fecha_nacimiento: Date;
    genero: string;
    email: string;
    direccion: string;
    telefono: string;
    rh: string;
    alergias: string;
    marca: string;
    cilindraje: number;
    foto_portador: string;
    centro_de_salud: string;
    compañia_de_seguros: string;
    placa: string;
    licencia: string;
    matricula_o_tarjeta: string;
    factura: string;
    seguro: string;
    tenencias: string;
    enfermedades: string;
    recomendaiones: string;
    nombre_padre: string;
    nombre_madre: string;
    telefono_padre: string;
    telefono_madre: string;
    raza: string;
    nombre_mascota: string;
    fecha_nacimiento_mascota: Date;
    nombre_duenio: string;
}
export declare const ManillaSchema: import("mongoose").Schema<Manilla, import("mongoose").Model<Manilla, any, any, any, Document<unknown, any, Manilla> & Manilla & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Manilla, Document<unknown, {}, Manilla> & Manilla & {
    _id: Types.ObjectId;
}>;
