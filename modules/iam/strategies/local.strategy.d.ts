import { Strategy } from "passport-local";
import { AuthenticationCommonService } from "../authentication/authentication.common.service";
import { User } from "src/modules/users/entities/user.entity";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authenticationCommonService;
    constructor(authenticationCommonService: AuthenticationCommonService);
    validate(email: string, password: string): Promise<User>;
}
export {};
