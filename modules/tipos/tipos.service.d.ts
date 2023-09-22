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
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { Tipo } from './entities/tipo.entity';
import { Model } from 'mongoose';
export declare class TiposService {
    private readonly tipoModel;
    constructor(tipoModel: Model<Tipo>);
    create(createTipoDto: CreateTipoDto): Promise<import("mongoose").Document<unknown, {}, Tipo> & Tipo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    existByNombre(nombre: String): Promise<import("mongoose").Document<unknown, {}, Tipo> & Tipo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Tipo> & Tipo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: String): Promise<import("mongoose").Document<unknown, {}, Tipo> & Tipo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: String, updateTipoDto: UpdateTipoDto): Promise<import("mongoose").Document<unknown, {}, Tipo> & Tipo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: number): string;
}
