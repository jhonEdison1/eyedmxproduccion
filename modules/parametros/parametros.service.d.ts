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
import { CreateParametroDto } from './dto/create-parametro.dto';
import { UpdateParametroDto } from './dto/update-parametro.dto';
import { Parametro } from './entities/parametro.entity';
import { Model } from 'mongoose';
import { FilterParametroDto } from './dto/filter-parametros.dto';
export declare class ParametrosService {
    private readonly parametroModel;
    constructor(parametroModel: Model<Parametro>);
    create(createParametroDto: CreateParametroDto): Promise<import("mongoose").Document<unknown, {}, Parametro> & Parametro & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneByName(nombre: string): Promise<string>;
    findAll(params?: FilterParametroDto): Promise<{
        parametros: (import("mongoose").Document<unknown, {}, Parametro> & Parametro & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Parametro> & Parametro & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateParametroDto: UpdateParametroDto): Promise<import("mongoose").Document<unknown, {}, Parametro> & Parametro & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: number): string;
}
