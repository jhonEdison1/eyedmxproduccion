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
exports.ParametrosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const parametro_entity_1 = require("./entities/parametro.entity");
const mongoose_2 = require("mongoose");
let ParametrosService = class ParametrosService {
    constructor(parametroModel) {
        this.parametroModel = parametroModel;
    }
    async create(createParametroDto) {
        const exist = await this.existeParametro(createParametroDto.nombre);
        if (exist) {
            throw new common_1.ConflictException('ya existe un parametro con ese nombre');
        }
        const parametro = await new this.parametroModel(createParametroDto);
        return parametro.save();
    }
    async existeParametro(nombre) {
        const parametro = await this.parametroModel.findOne({ nombre: nombre });
        if (parametro) {
            return true;
        }
        else {
            return false;
        }
    }
    async findOneByName(nombre) {
        const parametro = await this.parametroModel.findOne({ nombre: nombre });
        return parametro.valor;
    }
    async findAll(params) {
        const filters = {};
        const { limit, offset } = params;
        const [parametros, totalDocuments] = await Promise.all([
            this.parametroModel.find(filters)
                .skip(offset * limit)
                .limit(limit)
                .exec(),
            this.parametroModel.countDocuments(filters).exec()
        ]);
        return {
            parametros,
            totalDocuments
        };
    }
    async findOne(id) {
        const parametro = await this.parametroModel.findById(id);
        return parametro;
    }
    async update(id, updateParametroDto) {
        const exist = await this.parametroModel.findById(id);
        if (!exist) {
            throw new common_1.NotFoundException('Parametro no encontrado');
        }
        const parametro = await this.parametroModel.findByIdAndUpdate(id, updateParametroDto, { new: true });
        return parametro;
    }
    remove(id) {
        return `This action removes a #${id} parametro`;
    }
};
ParametrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(parametro_entity_1.Parametro.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ParametrosService);
exports.ParametrosService = ParametrosService;
//# sourceMappingURL=parametros.service.js.map