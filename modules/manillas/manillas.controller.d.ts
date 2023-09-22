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
import { ManillasService } from './manillas.service';
import { CreateManillaDto } from './dto/create-manilla.dto';
import { EditManillaDto, UpdateManillaDto } from './dto/update-manilla.dto';
import { FilterManillaDto } from './dto/filter-manilla.dto';
import { IdsAprobarDto } from './dto/ids-aprobar.dto';
import { CreateEntradaDto } from '../entradas/dto/create-entrada.dto';
import { estadoManilla } from './entities/manilla.entity';
export declare class ManillasController {
    private readonly manillasService;
    constructor(manillasService: ManillasService);
    create(createManillaDto: CreateManillaDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createVarias(createManillaDto: CreateManillaDto[], req: any): Promise<any[]>;
    updateManilla(id: string, editManilla: EditManillaDto, req: any): Promise<{
        message: string;
        manillaEditada: import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findSolicitudes(params?: FilterManillaDto): Promise<{
        manillas: Omit<Omit<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        totalDocuments: number;
    }>;
    findAceptadas(params?: FilterManillaDto): Promise<{
        manillas: Omit<Omit<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        totalDocuments: number;
        manillasResagadas: Omit<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalDocumentsResagadas: number;
    }>;
    findAll(params?: FilterManillaDto): Promise<{
        manillas: Omit<Omit<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
        totalDocuments: number;
    }>;
    getEstados(): {
        name: string;
        value: any;
    }[];
    aprobar(id: string): Promise<{
        message: string;
        manilla: import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    aprobarTodas(): Promise<{
        aceptadas: any[];
        errores: string[];
    }>;
    enviar(id: string, estado: estadoManilla): Promise<{
        message: string;
        manilla: import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    enviarVarias(body: IdsAprobarDto, estado: estadoManilla): Promise<{
        manillas: any[];
        errores: string[];
    }>;
    aprobarVarias(body: IdsAprobarDto): Promise<{
        aceptadas: any[];
        errores: string[];
    }>;
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateManillaDto: UpdateManillaDto): string;
    findMisManillas(req: any, filter?: FilterManillaDto): Promise<{
        misManillas: any[];
    }>;
    obtenerInfoMotoPorPlaca(placa: string, req: any): Promise<{
        placa: string;
        marca: string;
        cilindraje: number;
        conductor: string;
        entradas: Omit<import("mongoose").Document<unknown, {}, import("../entradas/entities/entrada.entity").Entrada> & import("../entradas/entities/entrada.entity").Entrada & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    crearEntrada(placa: string, body: CreateEntradaDto, req: any): Promise<{
        placa: string;
        marca: string;
        cilindraje: number;
        conductor: string;
        entradas: Omit<import("mongoose").Document<unknown, {}, import("../entradas/entities/entrada.entity").Entrada> & import("../entradas/entities/entrada.entity").Entrada & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    actualizarPago(id: string, pagoId: string): Promise<{
        message: string;
        manilla: import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    obtenerReporteTotal(): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getManillaByIdPago(pagoId: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/manilla.entity").Manilla> & import("./entities/manilla.entity").Manilla & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): string;
}
