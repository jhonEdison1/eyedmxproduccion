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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { EntradasService } from './entradas.service';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { FilterEntradaDto } from './dto/filte-entrada.dto';
export declare class EntradasController {
    private readonly entradasService;
    constructor(entradasService: EntradasService);
    findAll(req: any, params?: FilterEntradaDto): Promise<{
        entradas: Omit<import("mongoose").Document<unknown, {}, import("./entities/entrada.entity").Entrada> & import("./entities/entrada.entity").Entrada & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalDocuments: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateEntradaDto: UpdateEntradaDto): string;
    remove(id: string): string;
}
