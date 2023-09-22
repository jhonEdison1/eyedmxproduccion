declare const _default: (() => {
    mongo: {
        dbname: string;
        user: string;
        password: string;
        port: string | number;
        hostname: string;
        connection: string;
        params: string;
    };
    session: {
        accessToken: string;
        jwtAccessTokenSecret: string;
        jwtAccessTokenExpiresTime: string;
        jwtRefreshTokenSecret: string;
        jwtRefreshTokenExpiresTime: string;
        jwtForgotPasswordSecret: string;
        jwtForgotPasswordExpiresTime: string;
    };
    frontend: {
        url: string;
        urlinfo: string;
        urlreset: string;
    };
    s3: {
        bucket: string;
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
        url: string;
    };
    mail: {
        host: string;
        user: string;
        pass: string;
        from: string;
    };
    stripe: {
        secretKey: string;
        publicKey: string;
        currency: string;
    };
    convertio: {
        apiKey: string;
        url: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    mongo: {
        dbname: string;
        user: string;
        password: string;
        port: string | number;
        hostname: string;
        connection: string;
        params: string;
    };
    session: {
        accessToken: string;
        jwtAccessTokenSecret: string;
        jwtAccessTokenExpiresTime: string;
        jwtRefreshTokenSecret: string;
        jwtRefreshTokenExpiresTime: string;
        jwtForgotPasswordSecret: string;
        jwtForgotPasswordExpiresTime: string;
    };
    frontend: {
        url: string;
        urlinfo: string;
        urlreset: string;
    };
    s3: {
        bucket: string;
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
        url: string;
    };
    mail: {
        host: string;
        user: string;
        pass: string;
        from: string;
    };
    stripe: {
        secretKey: string;
        publicKey: string;
        currency: string;
    };
    convertio: {
        apiKey: string;
        url: string;
    };
}>;
export default _default;
