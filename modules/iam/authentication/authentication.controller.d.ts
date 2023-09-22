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
import { AuthenticationCommonService } from './authentication.common.service';
import { Request } from 'express';
import { User } from 'src/modules/users/entities/user.entity';
import { AuthenticationService } from './authentication.service';
import { ResetPasswordDto } from './dto/reset-passwor.dto';
export declare class AuthenticationController {
    private readonly authenticationCommonService;
    private readonly authService;
    constructor(authenticationCommonService: AuthenticationCommonService, authService: AuthenticationService);
    signIn(req: Request): Promise<{
        message: string;
        accessToken: string;
        refreshToken: string;
        user: import("../models/signin.model").SigninPayload;
    }>;
    existUser(email: string): Promise<boolean>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(body: ResetPasswordDto): Promise<{
        message: string;
    }>;
    refreshToken(req: Request): Promise<{
        message: string;
        accesstoken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getFields(type: string): Promise<({
        name: string;
        type: string;
        description: string;
        required: boolean;
        private: boolean;
        opciones?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        required: boolean;
        private?: undefined;
        opciones?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        opciones: string[];
        required: boolean;
        private: boolean;
    })[]>;
    getTypes(): Promise<{
        name: import("./authentication.common.service").Tipos;
        description: string;
    }[]>;
}
