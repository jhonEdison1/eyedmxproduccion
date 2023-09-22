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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const mongoose_2 = require("mongoose");
const hashing_service_1 = require("../../providers/hashing/hashing.service");
const errors_service_1 = require("../errors/errors.service");
const manillas_service_1 = require("../manillas/manillas.service");
const roles_model_1 = require("../iam/models/roles.model");
const config_1 = require("../../config");
const AWS = require("aws-sdk");
const mail_service_1 = require("../mail/mail.service");
let UsersService = class UsersService {
    constructor(configService, userModel, hashingService, errorService, manillasService, mailService) {
        this.configService = configService;
        this.userModel = userModel;
        this.hashingService = hashingService;
        this.errorService = errorService;
        this.manillasService = manillasService;
        this.mailService = mailService;
        AWS.config.update({
            accessKeyId: configService.s3.accessKeyId,
            secretAccessKey: configService.s3.secretAccessKey,
            region: configService.s3.region
        });
        this.s3 = new AWS.S3();
    }
    async create(payload) {
        try {
            const existemail = await this.userModel.exists({ email: payload.email.trim() });
            if (existemail) {
                throw new common_1.ConflictException('El correo ya existe');
            }
            payload.password = await this.hashingService.hash(payload.password.trim());
            const newRecord = new this.userModel(payload);
            if (payload.fotoBase64) {
                let dataD = payload.fotoBase64;
                let extension = dataD.substring("data:".length, dataD.indexOf(";base64"));
                if (extension == 'image/png') {
                    dataD = dataD.replace('data:image/png;base64,', '');
                    extension = 'png';
                }
                else if (extension == 'image/jpeg') {
                    dataD = dataD.replace('data:image/jpeg;base64,', '');
                    extension = 'jpg';
                }
                else if (extension == 'image/jpg') {
                    dataD = dataD.replace('data:image/jpg;base64,', '');
                    extension = 'jpg';
                }
                else {
                    throw new common_1.ConflictException('La imagen debe ser png o jpg');
                }
                payload.fotoBase64 = await this.uploadBase64ToS3(newRecord._id.toString(), dataD, extension);
            }
            newRecord.fotoBase64 = payload.fotoBase64;
            const newuser = await newRecord.save();
            const email = newuser.email;
            const name = newuser.name;
            await this.mailService.sendCorreoBienvenida(email, name);
            return newuser;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async uploadBase64ToS3(id, base64Data, extension) {
        const buffer = Buffer.from(base64Data, 'base64');
        const uploadFolderPath = 'users';
        const fileName = `users/${id}/${Date.now()}` + '.' + extension;
        let contentype = 'image' + '/' + extension;
        const s3Params = {
            Bucket: this.configService.s3.bucket,
            Key: fileName,
            Body: buffer,
            ContentType: contentype,
        };
        try {
            const uploadedObject = await this.s3.upload(s3Params).promise();
            const urlfoto = uploadedObject.Location;
            return urlfoto;
        }
        catch (error) {
            throw new Error(`Error al subir la imagen a S3: ${error.message}`);
        }
    }
    async singupTaller(payload) {
        try {
            const existemail = await this.userModel.exists({ email: payload.email.trim() });
            if (existemail) {
                throw new common_1.ConflictException('El correo ya existe');
            }
            payload.password = await this.hashingService.hash(payload.password.trim());
            const newRecord = new this.userModel(payload);
            newRecord.role = roles_model_1.Role.TALLER;
            newRecord.aceptado = false;
            if (payload.fotoBase64) {
                let dataD = payload.fotoBase64;
                let extension = dataD.substring("data:".length, dataD.indexOf(";base64"));
                if (extension == 'image/png') {
                    dataD = dataD.replace('data:image/png;base64,', '');
                    extension = 'png';
                }
                else if (extension == 'image/jpeg') {
                    dataD = dataD.replace('data:image/jpeg;base64,', '');
                    extension = 'jpg';
                }
                else if (extension == 'image/jpg') {
                    dataD = dataD.replace('data:image/jpg;base64,', '');
                    extension = 'jpg';
                }
                else {
                    throw new common_1.ConflictException('La imagen debe ser png o jpg');
                }
                payload.fotoBase64 = await this.uploadBase64ToS3(newRecord._id.toString(), dataD, extension);
            }
            newRecord.fotoBase64 = payload.fotoBase64;
            const newuser = await newRecord.save();
            return newuser;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async createTaller(payload) {
        try {
            const existemail = await this.userModel.exists({ email: payload.email.trim() });
            if (existemail) {
                throw new common_1.ConflictException('El correo ya existe');
            }
            payload.password = await this.hashingService.hash(payload.password.trim());
            const newRecord = new this.userModel(payload);
            newRecord.role = roles_model_1.Role.TALLER;
            if (payload.fotoBase64) {
                let dataD = payload.fotoBase64;
                let extension = dataD.substring("data:".length, dataD.indexOf(";base64"));
                if (extension == 'image/png') {
                    dataD = dataD.replace('data:image/png;base64,', '');
                    extension = 'png';
                }
                else if (extension == 'image/jpeg') {
                    dataD = dataD.replace('data:image/jpeg;base64,', '');
                    extension = 'jpg';
                }
                else if (extension == 'image/jpg') {
                    dataD = dataD.replace('data:image/jpg;base64,', '');
                    extension = 'jpg';
                }
                else {
                    throw new common_1.ConflictException('La imagen debe ser png o jpg');
                }
                payload.fotoBase64 = await this.uploadBase64ToS3(newRecord._id.toString(), dataD, extension);
            }
            newRecord.fotoBase64 = payload.fotoBase64;
            const newuser = await newRecord.save();
            const email = newuser.email;
            const name = newuser.name;
            await this.mailService.sendCorreoBienvenida(email, name);
            return newuser;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async findAllUsersClients(params) {
        const filters = { role: roles_model_1.Role.USER };
        const { limit, offset, name } = params;
        if (params) {
            if (name) {
                filters.name = {
                    $regex: name,
                    $options: "i",
                };
            }
        }
        const [users, totalDocuments] = await Promise.all([
            this.userModel
                .find(filters)
                .skip(offset * limit)
                .limit(limit)
                .exec(),
            this.userModel.countDocuments(filters).exec(),
        ]);
        return {
            users,
            totalDocuments
        };
    }
    async findAllUsersTalleres(params) {
        const filters = { role: roles_model_1.Role.TALLER };
        const { limit, offset, name } = params;
        if (params) {
            if (name) {
                filters.name = {
                    $regex: name,
                    $options: "i",
                };
            }
        }
        const [talleres, totalDocuments] = await Promise.all([
            this.userModel
                .find(filters)
                .skip(offset * limit)
                .limit(limit)
                .exec(),
            this.userModel.countDocuments(filters).exec(),
        ]);
        return {
            talleres,
            totalDocuments
        };
    }
    async findAllUsersTalleresAceptados(params) {
        const filters = { role: roles_model_1.Role.TALLER, aceptado: true };
        const { limit, offset, name } = params;
        if (params) {
            if (name) {
                filters.name = {
                    $regex: name,
                    $options: "i",
                };
            }
        }
        const [talleres, totalDocuments] = await Promise.all([
            this.userModel
                .find(filters)
                .skip(offset * limit)
                .limit(limit)
                .exec(),
            this.userModel.countDocuments(filters).exec(),
        ]);
        return {
            talleres,
            totalDocuments
        };
    }
    async findAllUsersTalleresPendientes(params) {
        const filters = { role: roles_model_1.Role.TALLER, aceptado: false };
        const { limit, offset, name } = params;
        if (params) {
            if (name) {
                filters.name = {
                    $regex: name,
                    $options: "i",
                };
            }
        }
        const [talleres, totalDocuments] = await Promise.all([
            this.userModel
                .find(filters)
                .skip(offset * limit)
                .limit(limit)
                .exec(),
            this.userModel.countDocuments(filters).exec(),
        ]);
        return {
            talleres,
            totalDocuments
        };
    }
    async findOneTaller(id) {
        try {
            const taller = await this.userModel.findOne({ _id: id, role: roles_model_1.Role.TALLER }).exec();
            return taller;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async aceptarTaller(id) {
        try {
            const taller = await this.userModel.findOne({ _id: id, role: roles_model_1.Role.TALLER }).exec();
            if (!taller) {
                throw new common_1.ConflictException('El taller no existe');
            }
            if (taller.aceptado) {
                throw new common_1.ConflictException('El taller ya fue aceptado anteriormente');
            }
            taller.aceptado = true;
            await taller.save();
            const email = taller.email;
            const name = taller.name;
            await this.mailService.sendCorreoBienvenida(email, name);
            return taller;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async findOneCliente(id) {
        try {
            const cliente = await this.userModel.findOne({ _id: id, role: roles_model_1.Role.USER }).exec();
            cliente.password = undefined;
            if (!cliente) {
                throw new common_1.ConflictException('El cliente no existe');
            }
            const manillas = await this.manillasService.obtenerMisManillasAgrupadasPorTipo(id);
            let clienteConManillas = cliente.toObject();
            clienteConManillas['manillas'] = manillas;
            return clienteConManillas;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async updateCliente(id, payload, user) {
        try {
            console.log('user', user);
            if (user.id.toString() !== id) {
                throw new common_1.UnauthorizedException('No tienes permisos para actualizar este cliente');
            }
            const usuario = await this.userModel.findOne({ _id: id }).exec();
            if (!usuario) {
                throw new common_1.ConflictException('El usuario no existe');
            }
            if (payload.direccion) {
                usuario.direccion = payload.direccion;
            }
            if (payload.telefono) {
                usuario.telefono = payload.telefono;
            }
            if (payload.fotoBase64) {
                let dataD = payload.fotoBase64;
                let extension = dataD.substring("data:".length, dataD.indexOf(";base64"));
                if (extension == 'image/png') {
                    dataD = dataD.replace('data:image/png;base64,', '');
                    extension = 'png';
                }
                else if (extension == 'image/jpeg') {
                    dataD = dataD.replace('data:image/jpeg;base64,', '');
                    extension = 'jpg';
                }
                else if (extension == 'image/jpg') {
                    dataD = dataD.replace('data:image/jpg;base64,', '');
                    extension = 'jpg';
                }
                else {
                    throw new common_1.ConflictException('La imagen debe ser png o jpg');
                }
                usuario.fotoBase64 = await this.uploadBase64ToS3(id, dataD, extension);
            }
            await usuario.save();
            return usuario;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    async changePassword(id, payload) {
        console.log(id);
        try {
            const usuario = await this.userModel.findOne({ _id: id }).exec();
            if (!usuario) {
                throw new common_1.ConflictException('El usuario no existe');
            }
            const isPasswordMatched = await this.hashingService.compare(payload.oldpassword.trim(), usuario.password);
            console.log(isPasswordMatched);
            if (!isPasswordMatched) {
                throw new common_1.ConflictException("La contraseña anterior no es correcta, por favor verifique");
            }
            usuario.password = await this.hashingService.hash(payload.newPassword.trim());
            await usuario.save();
            return {
                message: 'Contraseña actualizada correctamente'
            };
        }
        catch (error) {
            throw new common_1.ConflictException("Fallo al actualizar contraseña " + error.message);
        }
    }
    async getKpi(fechaInicial, fechaFinal) {
        const { fechaInicialFormateada, fechaFinalFormateada } = await this.formatearFechas(fechaInicial, fechaFinal);
        const usuarios = await this.obtenerUsuariosRegistrados(fechaInicialFormateada, fechaFinalFormateada);
        const manillasPorTipo = await this.manillasService.obtenerManillasPorTipo(fechaInicialFormateada, fechaFinalFormateada);
        const manillasPorEstado = await this.manillasService.obtenerManillasPorEstado(fechaInicialFormateada, fechaFinalFormateada);
        return {
            usuarios,
            manillasPorTipo,
            manillasPorEstado
        };
    }
    async formatearFechas(fechaInicial, fechaFinal) {
        const fechaInicialFormateada = new Date(fechaInicial);
        fechaInicialFormateada.setHours(0, 0, 0, 0);
        const fechaFinalFormateada = new Date(fechaFinal);
        fechaFinalFormateada.setHours(23, 59, 59, 999);
        return {
            fechaInicialFormateada,
            fechaFinalFormateada
        };
    }
    async obtenerUsuariosRegistrados(fechaInicialFormateada, fechaFinalFormateada) {
        try {
            const usuarios = await this.userModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: fechaInicialFormateada,
                            $lte: fechaFinalFormateada
                        }
                    }
                },
                {
                    $group: {
                        _id: "$role",
                        count: { $sum: 1 }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        role: "$_id",
                        count: 1
                    }
                }
            ]);
            const usuariosFiltrados = usuarios.filter(usuario => usuario.role !== roles_model_1.Role.ADMIN);
            return usuariosFiltrados;
        }
        catch (error) {
            this.errorService.createError(error);
        }
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [void 0, mongoose_2.Model,
        hashing_service_1.HashingService,
        errors_service_1.ErrorsService,
        manillas_service_1.ManillasService,
        mail_service_1.MailService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map