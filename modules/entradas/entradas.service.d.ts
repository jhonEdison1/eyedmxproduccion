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
import { InfoEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Entrada } from './entities/entrada.entity';
import { Model } from 'mongoose';
import { FilterEntradaDto } from './dto/filte-entrada.dto';
export declare class EntradasService {
    private readonly entradaModel;
    constructor(entradaModel: Model<Entrada>);
    findByPlacaAndTaller(placa: string, taller: string): Promise<Omit<import("mongoose").Document<unknown, {}, Entrada> & Entrada & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findByPlaca(placa: string): Promise<Omit<import("mongoose").Document<unknown, {}, Entrada> & Entrada & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    create(createEntradaDto: InfoEntradaDto): Promise<Omit<import("mongoose").Document<unknown, {}, Entrada> & Entrada & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findMisEntradas(params: FilterEntradaDto, taller: string): Promise<{
        entradas: Omit<import("mongoose").Document<unknown, {}, Entrada> & Entrada & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalDocuments: number;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEntradaDto: UpdateEntradaDto): string;
    remove(id: number): string;
}
