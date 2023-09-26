import { AuthenticationCommonService } from "./authentication.common.service";
import { ErrorsService } from "src/modules/errors/errors.service";
import { SigninPayload } from "../models/signin.model";
export declare class AuthenticationService {
    private readonly authcommonService;
    private readonly errorService;
    constructor(authcommonService: AuthenticationCommonService, errorService: ErrorsService);
    signIn(payload: SigninPayload): Promise<{
        message: string;
        accessToken: string;
        refreshToken: string;
        user: SigninPayload;
    }>;
    generateNewAccessToken(payload: SigninPayload, refreshToken: string): Promise<{
        message: string;
        accesstoken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("../../users/entities/user.entity").User> & import("../../users/entities/user.entity").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, password: string): Promise<{
        message: string;
    }>;
}
