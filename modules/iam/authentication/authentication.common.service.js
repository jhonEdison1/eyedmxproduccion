"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationCommonService = exports.Tipos = void 0;
const common_1 = require("@nestjs/common");
const errors_service_1 = require("../../errors/errors.service");
const hashing_service_1 = require("../../../providers/hashing/hashing.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../../users/entities/user.entity");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../../../config");
const mail_service_1 = require("../../mail/mail.service");
var Tipos;
(function (Tipos) {
    Tipos["Motero"] = "Motociclista";
    Tipos["Adulto_Mayor"] = "Adulto_Mayor";
    Tipos["Ni\u00F1o"] = "Ni\u00F1o";
    Tipos["Mascota"] = "Mascota";
    Tipos["Deportista"] = "Deportista";
})(Tipos = exports.Tipos || (exports.Tipos = {}));
let AuthenticationCommonService = class AuthenticationCommonService {
    constructor(configSerivce, userModel, errorService, hashingService, jwtService, mailService) {
        this.configSerivce = configSerivce;
        this.userModel = userModel;
        this.errorService = errorService;
        this.hashingService = hashingService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async isAcepted(id) {
        try {
            const user = await this.userModel.findById(id).exec();
            if (!user) {
                throw new common_1.ConflictException('El usuario no existe');
            }
            return user.aceptado;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    generateJwtAccessToken(payload) {
        try {
            const accessToken = this.jwtService.signAsync(payload, {
                secret: this.configSerivce.session.jwtAccessTokenSecret,
                expiresIn: this.configSerivce.session.jwtAccessTokenExpiresTime,
            });
            return accessToken;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    generateJwtRefreshoken(payload) {
        try {
            const refreshToken = this.jwtService.signAsync(payload, {
                secret: this.configSerivce.session.jwtRefreshTokenSecret,
                expiresIn: this.configSerivce.session.jwtRefreshTokenExpiresTime,
            });
            return refreshToken;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    generateTokenForgotPassword(id) {
        try {
            const token = this.jwtService.signAsync({ id }, {
                secret: this.configSerivce.session.jwtForgotPasswordSecret,
                expiresIn: this.configSerivce.session.jwtForgotPasswordExpiresTime,
            });
            return token;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    sendEmailForgotPassword(email, token) {
        const urlreset = this.configSerivce.frontend.urlreset;
        const url = `${urlreset}?token=${token}`;
        return this.mailService.sendEmailForgotPassword(email, url);
    }
    async updateTokenReset(id, token) {
        const reset = await this.userModel.findByIdAndUpdate(id, { tokenreset: token });
        return reset;
    }
    async findUserByTokenReset(token) {
        const user = await this.userModel.findOne({ tokenreset: token });
        if (!user) {
            throw new common_1.ConflictException('El usuario no existe');
        }
        return user;
    }
    async resetPassword(id, password) {
        const hashedPassword = await this.hashingService.hash(password);
        const reset = await this.userModel.findByIdAndUpdate(id, { password: hashedPassword });
        return reset;
    }
    async existUser(email) {
        const existUser = await this.userModel.findOne({ email: email.trim() }).exec();
        if (!existUser) {
            return false;
        }
        return true;
    }
    async findUserToAuthenticate(payload) {
        try {
            const user = await this.userModel.findOne({ email: payload.email.trim() }).exec();
            if (!user) {
                throw new common_1.ConflictException("Por favor ingrese un email y/o contraseña válida");
            }
            const isPasswordMatched = await this.hashingService.compare(payload.password.trim(), user.password);
            if (!isPasswordMatched) {
                throw new common_1.ConflictException("Por favor ingrese un email y/o contraseña válida");
            }
            return user;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async findUserAutenticated(id) {
        try {
            return await this.userModel.findById(id);
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    getFields(type) {
        switch (type) {
            case Tipos.Motero:
                return [
                    {
                        name: "nombre_portador",
                        type: "text",
                        description: "Nombre del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "documento",
                        type: "text",
                        description: "Documento del portador de la pulsera",
                        required: true,
                        private: true
                    },
                    {
                        name: "fecha_nacimiento",
                        type: "Date",
                        description: "Fecha de nacimiento del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "genero",
                        type: "select",
                        description: "Genero del portador de la pulsera",
                        opciones: ["Masculino", "Femenino", "Otro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "color",
                        type: "select",
                        description: "color  de la pulsera",
                        opciones: ["Azul", "Blanco", "Rojo", "Negro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "email",
                        type: "email",
                        description: "Email del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "direccion",
                        type: "text",
                        description: "Direccion del portador de la pulsera",
                        required: true,
                        private: true
                    },
                    {
                        name: "telefono",
                        type: "telefono",
                        description: "Telefono del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "contacto_de_emergencia",
                        type: "text",
                        description: "Contacto de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "telefono_de_emergencia",
                        type: "telefono",
                        description: "Telefono de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "rh",
                        type: "select",
                        description: "Rh del portador de la pulsera",
                        opciones: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                        required: true,
                        private: false
                    },
                    {
                        name: "alergias",
                        type: "text",
                        description: "Alergias del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "marca",
                        type: "text",
                        description: "Marca de la moto",
                        required: false,
                        private: true
                    },
                    {
                        name: "cilindraje",
                        type: "number",
                        description: "Cilindraje de la moto",
                        required: false,
                        private: true
                    },
                    {
                        name: "foto_portador",
                        type: "file",
                        description: "Foto del portador de la pulsera",
                        required: false,
                        private: false
                    },
                    {
                        name: "centro_de_salud",
                        type: "text",
                        description: "Centro de salud",
                        required: false,
                        private: false
                    },
                    {
                        name: "compañia_de_seguros",
                        type: "text",
                        description: "Compañia de seguros",
                        required: true,
                        private: false
                    },
                    {
                        name: "placa",
                        type: "text",
                        description: "Placa de la moto",
                        required: true,
                        private: false
                    },
                    {
                        name: "licencia",
                        type: "file",
                        description: "licencia de conduccion",
                        required: false,
                        private: true
                    },
                    {
                        name: "matricula_o_tarjeta",
                        type: "file",
                        description: "Matricula o tarjeta de circulación",
                        required: false,
                        private: true
                    },
                    {
                        name: "factura",
                        type: "file",
                        description: "factura de la moto",
                        required: false,
                        private: true
                    },
                    {
                        name: "seguro",
                        type: "file",
                        description: "seguro de la moto",
                        required: false,
                        private: true
                    },
                    {
                        name: "tenencias",
                        type: "file",
                        description: "tenencias de la moto",
                        required: false,
                        private: true
                    },
                ];
                break;
            case Tipos.Adulto_Mayor:
                return [
                    {
                        name: "nombre_portador",
                        type: "text",
                        description: "Nombre del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "documento",
                        type: "text",
                        description: "Documento del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "color",
                        type: "select",
                        description: "color  de la pulsera",
                        opciones: ["Azul", "Blanco", "Rojo", "Negro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "fecha_nacimiento",
                        type: "Date",
                        description: "Fecha de nacimiento del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "genero",
                        type: "select",
                        description: "Genero del portador de la pulsera",
                        opciones: ["Masculino", "Femenino", "Otro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "email",
                        type: "email",
                        description: "Email del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "direccion",
                        type: "text",
                        description: "Direccion del portador de la pulsera",
                        required: true,
                        private: true
                    },
                    {
                        name: "telefono",
                        type: "telefono",
                        description: "Telefono del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "contacto_de_emergencia",
                        type: "text",
                        description: "Contacto de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "telefono_de_emergencia",
                        type: "telefono",
                        description: "Telefono de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "rh",
                        type: "select",
                        description: "Rh del portador de la pulsera",
                        opciones: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                        required: true,
                        private: false
                    },
                    {
                        name: "alergias",
                        type: "text",
                        description: "Alergias del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "enfermedades",
                        type: "text",
                        description: "Enfermedades del adulto mayor",
                        required: true,
                        private: false
                    },
                    {
                        name: "centro_de_salud",
                        type: "text",
                        description: "Centro de salud",
                        required: true,
                        private: false
                    },
                    {
                        name: "recomendaciones",
                        type: "textarea",
                        description: "Recomendaciones del adulto mayor",
                        required: true,
                        private: false
                    },
                    {
                        name: "foto_portador",
                        type: "file",
                        description: "Foto del portador de la pulsera",
                        required: true,
                        private: false
                    },
                ];
                break;
            case Tipos.Niño:
                return [
                    {
                        name: "nombre_portador",
                        type: "text",
                        description: "Nombre del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "documento",
                        type: "text",
                        description: "Documento del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "color",
                        type: "select",
                        description: "color  de la pulsera",
                        opciones: ["Azul", "Blanco", "Rojo", "Negro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "fecha_nacimiento",
                        type: "Date",
                        description: "Fecha de nacimiento del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "genero",
                        type: "select",
                        description: "Genero del portador de la pulsera",
                        opciones: ["Masculino", "Femenino", "Otro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "email",
                        type: "email",
                        description: "Email del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "direccion",
                        type: "text",
                        description: "Direccion del portador de la pulsera",
                        required: true,
                        private: true
                    },
                    {
                        name: "telefono",
                        type: "telefono",
                        description: "Telefono del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "contacto_de_emergencia",
                        type: "text",
                        description: "Contacto de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "telefono_de_emergencia",
                        type: "telefono",
                        description: "Telefono de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "rh",
                        type: "select",
                        description: "Rh del portador de la pulsera",
                        opciones: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                        required: true,
                        private: false
                    },
                    {
                        name: "alergias",
                        type: "text",
                        description: "Alergias del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "enfermedades",
                        type: "text",
                        description: "Enfermedades del niño",
                        required: true,
                        private: false
                    },
                    {
                        name: "centro_de_salud",
                        type: "text",
                        description: "Centro de salud",
                        required: false,
                        private: false
                    },
                    {
                        name: "recomendaciones",
                        type: "textarea",
                        description: "Recomendaciones del niño",
                        required: false,
                        private: false
                    },
                    {
                        name: "nombre_padre",
                        type: "text",
                        description: "Nombre del padre",
                        required: false,
                        private: true
                    },
                    {
                        name: "nombre_madre",
                        type: "text",
                        description: "Nombre de la madre",
                        required: false,
                        private: true
                    },
                    {
                        name: "telefono_padre",
                        type: "telefono",
                        description: "Telefono del padre",
                        required: false,
                        private: true
                    },
                    {
                        name: "telefono_madre",
                        type: "telefono",
                        description: "Telefono de la madre",
                        required: false,
                        private: true
                    },
                    {
                        name: "foto_portador",
                        type: "file",
                        description: "Foto del portador de la pulsera",
                        required: true,
                        private: false
                    }
                ];
                break;
            case Tipos.Mascota:
                return [
                    {
                        name: "nombre_duenio",
                        type: "text",
                        description: "Nombre del dueño de la mascota",
                        required: true,
                        private: false
                    },
                    {
                        name: "nombre_mascota",
                        type: "text",
                        description: "Nombre de la mascota",
                        required: true
                    },
                    {
                        name: "color",
                        type: "select",
                        description: "color  de la placa",
                        opciones: ["Azul", "Blanco", "Rojo", "Negro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "email",
                        type: "email",
                        description: "Email del dueño",
                        required: false,
                        private: true
                    },
                    {
                        name: "direccion",
                        type: "text",
                        description: "Direccion del portador de la placa",
                        required: true,
                        private: true
                    },
                    {
                        name: "telefono",
                        type: "telefono",
                        description: "Telefono del dueño",
                        required: true,
                        private: false
                    },
                    {
                        name: "contacto_de_emergencia",
                        type: "text",
                        description: "Contacto de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "telefono_de_emergencia",
                        type: "telefono",
                        description: "Telefono de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "enfermedades",
                        type: "text",
                        description: "Enfermedades de la mascota",
                        required: false,
                        private: false
                    },
                    {
                        name: "centro_de_salud",
                        type: "text",
                        description: "Centro de salud",
                        required: false,
                        private: false
                    },
                    {
                        name: "fecha_nacimiento_mascota",
                        type: "Date",
                        description: "Fecha de nacimiento de la mascota",
                        required: false,
                        private: true
                    },
                    {
                        name: "raza",
                        type: "text",
                        description: "Raza de la mascota",
                        required: true,
                        private: false
                    },
                    {
                        name: "foto_portador",
                        type: "file",
                        description: "Foto del portador de la placa",
                        required: true,
                        private: false
                    },
                ];
                break;
            case Tipos.Deportista:
                return [
                    {
                        name: "nombre_portador",
                        type: "text",
                        description: "Nombre del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "documento",
                        type: "text",
                        description: "Documento del portador de la pulsera",
                        required: true,
                        private: true
                    },
                    {
                        name: "fecha_nacimiento",
                        type: "Date",
                        description: "Fecha de nacimiento del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "genero",
                        type: "select",
                        description: "Genero del portador de la pulsera",
                        opciones: ["Masculino", "Femenino", "Otro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "color",
                        type: "select",
                        description: "color  de la pulsera",
                        opciones: ["Azul", "Blanco", "Rojo", "Negro"],
                        required: true,
                        private: false
                    },
                    {
                        name: "email",
                        type: "email",
                        description: "Email del portador de la pulsera",
                        required: false,
                        private: true
                    },
                    {
                        name: "direccion",
                        type: "text",
                        description: "Direccion del portador de la pulsera",
                        required: true,
                        private: true
                    },
                    {
                        name: "telefono",
                        type: "telefono",
                        description: "Telefono del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "contacto_de_emergencia",
                        type: "text",
                        description: "Contacto de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "telefono_de_emergencia",
                        type: "telefono",
                        description: "Telefono de emergencia",
                        required: true,
                        private: false
                    },
                    {
                        name: "rh",
                        type: "select",
                        description: "Rh del portador de la pulsera",
                        opciones: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
                        required: true,
                        private: false
                    },
                    {
                        name: "alergias",
                        type: "text",
                        description: "Alergias del portador de la pulsera",
                        required: true,
                        private: false
                    },
                    {
                        name: "foto_portador",
                        type: "file",
                        description: "Foto del portador de la pulsera",
                        required: false,
                        private: false
                    },
                    {
                        name: "centro_de_salud",
                        type: "text",
                        description: "Centro de salud",
                        required: false,
                        private: false
                    },
                    {
                        name: "compañia_de_seguros",
                        type: "text",
                        description: "Compañia de seguros",
                        required: true,
                        private: false
                    },
                    {
                        name: "deporte",
                        type: "text",
                        description: "Tipo de deporte que practica",
                        required: true,
                        private: false
                    },
                    {
                        name: "historia_clinica",
                        type: "file",
                        description: "Historia clinica",
                        required: false,
                        private: true
                    },
                    {
                        name: "archivos",
                        type: "file",
                        description: "archivos",
                        required: false,
                        private: true
                    }
                ];
                break;
        }
    }
    getTypes() {
        return [
            {
                name: Tipos.Motero,
                description: "Motociclista"
            },
            {
                name: Tipos.Adulto_Mayor,
                description: "Adulto Mayor"
            },
            {
                name: Tipos.Niño,
                description: "Niño"
            },
            {
                name: Tipos.Mascota,
                description: "Mascota"
            },
            {
                name: Tipos.Deportista,
                description: "Deportista"
            }
        ];
    }
    async findUserByEmail(email) {
        try {
            const user = await this.userModel.findOne({ email: email.trim() }).exec();
            if (!user) {
                throw new common_1.ConflictException("El usuario no existe");
            }
            return user;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
};
AuthenticationCommonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [void 0, mongoose_2.Model,
        errors_service_1.ErrorsService,
        hashing_service_1.HashingService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthenticationCommonService);
exports.AuthenticationCommonService = AuthenticationCommonService;
//# sourceMappingURL=authentication.common.service.js.map