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
exports.EntradasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const entrada_entity_1 = require("./entities/entrada.entity");
const mongoose_2 = require("mongoose");
let EntradasService = class EntradasService {
    constructor(entradaModel) {
        this.entradaModel = entradaModel;
    }
    async findByPlacaAndTaller(placa, taller) {
        const entradas = await this.entradaModel.find({ placa: placa, taller: taller }).populate({ path: 'taller', select: 'name' });
        return entradas;
    }
    async findByPlaca(placa) {
        const entradas = await this.entradaModel.find({ placa: placa }).populate({ path: 'taller', select: 'name' });
        return entradas;
    }
    async create(createEntradaDto) {
        const entrada = (await this.entradaModel.create(createEntradaDto)).populate({ path: 'taller', select: 'name' });
        return entrada;
    }
    async findMisEntradas(params, taller) {
        const filters = { taller: taller };
        const { limit, offset, placa } = params;
        if (params) {
            if (placa) {
                filters.placa = {
                    $regex: placa,
                    $options: "i",
                };
            }
        }
        const entradas = await this.entradaModel.find(filters).populate({ path: 'taller', select: 'name' }).skip(offset * limit).limit(limit);
        const totalDocuments = await this.entradaModel.countDocuments(filters).exec();
        return {
            entradas,
            totalDocuments
        };
    }
    findAll() {
        return `This action returns all entradas`;
    }
    findOne(id) {
        return `This action returns a #${id} entrada`;
    }
    update(id, updateEntradaDto) {
        return `This action updates a #${id} entrada`;
    }
    remove(id) {
        return `This action removes a #${id} entrada`;
    }
};
EntradasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(entrada_entity_1.Entrada.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EntradasService);
exports.EntradasService = EntradasService;
//# sourceMappingURL=entradas.service.js.map