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
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, FilterUsersDto, ChangePasswordDto } from './dto';
import { CreateUserTallerDto } from './dto/create-taller.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(payload: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    singupTaller(payload: CreateUserTallerDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createTaller(payload: CreateUserTallerDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getKpi(fechaInicio: string, fechaFin: string): Promise<{
        usuarios: any[];
        manillasPorTipo: any[];
        manillasPorEstado: any[];
    }>;
    findOneCliente(id: string): Promise<import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findAllUsers(filter: FilterUsersDto): Promise<{
        users: (import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findAllTalleres(filter: FilterUsersDto): Promise<{
        talleres: (import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findOneTaller(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    aceptarTaller(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllTalleresAceptados(filter: FilterUsersDto): Promise<{
        talleres: (import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findAllTalleresPendientes(filter: FilterUsersDto): Promise<{
        talleres: (import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    update(id: string, updateUserDto: UpdateUserDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    changePassword(payload: ChangePasswordDto, req: any): Promise<{
        message: string;
    }>;
}
