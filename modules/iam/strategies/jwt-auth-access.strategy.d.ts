import { ConfigType } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import config from "src/config";
import { PayloadToken } from "../models/token.model";
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    private readonly configSerivce;
    constructor(configSerivce: ConfigType<typeof config>);
    validate(payload: PayloadToken): Promise<PayloadToken>;
}
export {};
