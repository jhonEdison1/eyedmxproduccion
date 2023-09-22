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
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { HashingService } from 'src/providers/hashing/hashing.service';
import { ErrorsService } from '../errors/errors.service';
import { ManillasService } from '../manillas/manillas.service';
import { FilterUsersDto, ChangePasswordDto, CreateUserDto, UpdateUserDto } from './dto';
import { CreateUserTallerDto } from './dto/create-taller.dto';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { MailService } from '../mail/mail.service';
export declare class UsersService {
    private readonly configService;
    private readonly userModel;
    private readonly hashingService;
    private readonly errorService;
    private readonly manillasService;
    private readonly mailService;
    private readonly s3;
    constructor(configService: ConfigType<typeof config>, userModel: Model<User>, hashingService: HashingService, errorService: ErrorsService, manillasService: ManillasService, mailService: MailService);
    create(payload: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    uploadBase64ToS3(id: string, base64Data: string, extension: string): Promise<string>;
    singupTaller(payload: CreateUserTallerDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createTaller(payload: CreateUserTallerDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllUsersClients(params?: FilterUsersDto): Promise<{
        users: (import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findAllUsersTalleres(params?: FilterUsersDto): Promise<{
        talleres: (import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findAllUsersTalleresAceptados(params?: FilterUsersDto): Promise<{
        talleres: (import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findAllUsersTalleresPendientes(params?: FilterUsersDto): Promise<{
        talleres: (import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalDocuments: number;
    }>;
    findOneTaller(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    aceptarTaller(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneCliente(id: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateCliente(id: string, payload: UpdateUserDto, user: User): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    changePassword(id: string, payload: ChangePasswordDto): Promise<{
        message: string;
    }>;
    getKpi(fechaInicial: any, fechaFinal: any): Promise<{
        usuarios: any[];
        manillasPorTipo: any[];
        manillasPorEstado: any[];
    }>;
    formatearFechas(fechaInicial: any, fechaFinal: any): Promise<{
        fechaInicialFormateada: Date;
        fechaFinalFormateada: Date;
    }>;
    obtenerUsuariosRegistrados(fechaInicialFormateada: any, fechaFinalFormateada: any): Promise<any[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
