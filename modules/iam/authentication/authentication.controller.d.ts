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
