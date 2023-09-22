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
exports.PagosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("../../config");
const pago_entity_1 = require("./entities/pago.entity");
const mongoose_2 = require("mongoose");
const stripe_service_1 = require("./stripe.service");
const manillas_service_1 = require("../manillas/manillas.service");
let PagosService = class PagosService {
    constructor(configSerivce, pagoModel, stripeService, manillasService) {
        this.configSerivce = configSerivce;
        this.pagoModel = pagoModel;
        this.stripeService = stripeService;
        this.manillasService = manillasService;
    }
    async create(createPagoDto) {
        for (const manilla of createPagoDto.manillasId) {
            const existpagoByManilla = await this.findPagobyManilla(manilla);
            if (existpagoByManilla) {
                throw new common_1.ConflictException('Ya existe un pago para esta manilla');
            }
        }
        const nuevoPago = await new this.pagoModel(createPagoDto);
        await nuevoPago.save();
        for (const manilla of createPagoDto.manillasId) {
            await this.manillasService.actualizarPago(manilla, nuevoPago._id.toString());
        }
        return nuevoPago;
    }
    async findPagobyManilla(id) {
        const pago = await this.pagoModel.findOne({ manillasId: id }, { __v: 0, userId: 0, monto: 0 }).exec();
        if (!pago) {
            return null;
        }
        return pago;
    }
    async findOne(id) {
        try {
            const pago = await this.pagoModel.findById(id).populate({ path: 'manillasId' });
            return pago;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se encontro el La intencion de pago');
        }
    }
    async update(id, updatePagoDto) {
        try {
            const pago = await this.pagoModel.findById(id).populate({ path: 'userId', select: 'email' }).exec();
            if (!pago) {
                throw new common_1.NotFoundException('No se encontro el La intencion de pago');
            }
            if (pago.metodo === pago_entity_1.metodoPago.Stripe) {
                const email = pago.userId['email'];
                const responseMethod = await this.stripeService.generatePaymentMethod(updatePagoDto.token);
                const resPaymentIntent = await this.stripeService.createPaymentIntent(pago.monto, email, responseMethod.id);
                await this.pagoModel.findByIdAndUpdate(id, { stripeId: resPaymentIntent.id }).exec();
                return resPaymentIntent;
            }
            else {
                return { error: 'Metodo de pago no soportado' };
            }
        }
        catch (error) {
            throw new common_1.ConflictException('No se pudo Procesar el pago ' + error.message);
        }
    }
    async confirmar(id) {
        try {
            const pago = await this.pagoModel.findById(id).populate({ path: 'userId', select: 'email' }).exec();
            if (!pago) {
                throw new common_1.NotFoundException('No se encontro el La intencion de pago');
            }
            if (pago.metodo === pago_entity_1.metodoPago.Stripe) {
                const detailStripe = await this.stripeService.getPaymentDetail(pago.stripeId);
                const status = detailStripe.status.includes('succe') ? 'success' : 'fail';
                await this.pagoModel.findByIdAndUpdate(id, { estado: status }).exec();
                for (const manilla of pago.manillasId) {
                    await this.manillasService.changeEstadoPago(manilla.toString());
                }
                return detailStripe;
            }
            else {
                return { error: 'Metodo de pago no soportado' };
            }
        }
        catch (error) {
            throw new common_1.ConflictException('No se pudo Procesar el pago ' + error.message);
        }
    }
    async actualizarPagoEfectivo(id, estado) {
        const pago = await this.pagoModel.findById(id).exec();
        if (!pago) {
            throw new common_1.NotFoundException('No se encontro el La intencion de pago');
        }
        if (pago.estado === estado.estado) {
            throw new common_1.ConflictException('El estado enviado es el mismo que el actual');
        }
        if (pago.metodo === pago_entity_1.metodoPago.Efectivo) {
            await this.pagoModel.findByIdAndUpdate(id, { estado: estado.estado }).exec();
            for (const manilla of pago.manillasId) {
                await this.manillasService.changeEstadoPago(manilla.toString());
            }
            return { message: 'Se actualizo el estado del pago' };
        }
        else {
            throw new common_1.ConflictException('No se pudo Procesar el pago ' + 'Metodo de pago no soportado');
        }
    }
    async getFilter(filter) {
        const { limit, offset, estado, metodo } = filter;
        const filters = {};
        if (filter) {
            if (estado) {
                filters.estado = {
                    $regex: estado,
                    $options: "i",
                };
            }
            if (metodo) {
                filters.metodo = {
                    $regex: metodo,
                    $options: "i",
                };
            }
        }
        const pagos = await this.pagoModel.find(filters)
            .populate({ path: 'userId', select: 'email name' })
            .populate({ path: 'manillasId' })
            .skip(offset * limit)
            .limit(limit)
            .exec();
        const total = await this.pagoModel.countDocuments(filters).exec();
        return { pagos, total };
    }
    async updateIntento(id, updatePagoDto) {
        const pago = await this.pagoModel.findById(id).exec();
        if (!pago) {
            throw new common_1.NotFoundException('No se encontro el La intencion de pago');
        }
        pago.otros = updatePagoDto.otros;
        await pago.save();
        return pago;
    }
    remove(id) {
        return `This action removes a #${id} pago`;
    }
};
PagosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __param(1, (0, mongoose_1.InjectModel)(pago_entity_1.Pago.name)),
    __metadata("design:paramtypes", [void 0, mongoose_2.Model,
        stripe_service_1.StripeService,
        manillas_service_1.ManillasService])
], PagosService);
exports.PagosService = PagosService;
//# sourceMappingURL=pagos.service.js.map