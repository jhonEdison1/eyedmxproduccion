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
import { Types } from "mongoose";
import { Manilla } from "src/modules/manillas/entities/manilla.entity";
import { User } from "src/modules/users/entities/user.entity";
export declare enum metodoPago {
    Stripe = "Stripe",
    Efectivo = "Efectivo"
}
export declare enum estadoPago {
    success = "success",
    wait = "wait",
    fail = "fail"
}
export declare class Pago {
    userId: User;
    monto: number;
    metodo: metodoPago;
    estado: estadoPago;
    stripeId: string;
    manillasId: Manilla[];
    otros: Object;
    ordenId: string;
}
export declare const PagoSchema: import("mongoose").Schema<Pago, import("mongoose").Model<Pago, any, any, any, import("mongoose").Document<unknown, any, Pago> & Pago & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pago, import("mongoose").Document<unknown, {}, Pago> & Pago & {
    _id: Types.ObjectId;
}>;
