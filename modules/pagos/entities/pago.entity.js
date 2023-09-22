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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoSchema = exports.Pago = exports.estadoPago = exports.metodoPago = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../../users/entities/user.entity");
var metodoPago;
(function (metodoPago) {
    metodoPago["Stripe"] = "Stripe";
    metodoPago["Efectivo"] = "Efectivo";
})(metodoPago = exports.metodoPago || (exports.metodoPago = {}));
var estadoPago;
(function (estadoPago) {
    estadoPago["success"] = "success";
    estadoPago["wait"] = "wait";
    estadoPago["fail"] = "fail";
})(estadoPago = exports.estadoPago || (exports.estadoPago = {}));
let Pago = class Pago {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_entity_1.User)
], Pago.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", Number)
], Pago.prototype, "monto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        validate: {
            validator: (value) => Object.values(metodoPago).includes(value),
            message: props => `${props.value} is not a valid payment method `,
        },
    }),
    __metadata("design:type", String)
], Pago.prototype, "metodo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: estadoPago.wait, required: true,
        validate: {
            validator: (value) => Object.values(estadoPago).includes(value),
            message: props => `${props.value} is not a valid payment status`,
        },
    }),
    __metadata("design:type", String)
], Pago.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, nullable: true, default: null }),
    __metadata("design:type", String)
], Pago.prototype, "stripeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Manilla' }] }),
    __metadata("design:type", Array)
], Pago.prototype, "manillasId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Pago.prototype, "otros", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: false }),
    __metadata("design:type", String)
], Pago.prototype, "ordenId", void 0);
Pago = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Pago);
exports.Pago = Pago;
exports.PagoSchema = mongoose_1.SchemaFactory.createForClass(Pago);
//# sourceMappingURL=pago.entity.js.map