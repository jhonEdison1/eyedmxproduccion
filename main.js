"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix("eyedmx");
    app.useGlobalPipes(new common_1.ValidationPipe({
        transformOptions: {
            enableImplicitConversion: true,
        }
    }));
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    const config = new swagger_1.DocumentBuilder().setTitle('EyedMX API').setDescription('The EyedMX API description').setVersion('1.0').addTag('eyedmx').build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors();
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map