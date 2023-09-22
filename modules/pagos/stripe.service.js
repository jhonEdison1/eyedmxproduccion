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
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const stripe_1 = require("stripe");
let StripeService = class StripeService {
    constructor(configSerivce) {
        this.configSerivce = configSerivce;
        this.stripe = new stripe_1.default(this.configSerivce.stripe.secretKey, {
            apiVersion: '2023-08-16',
        });
    }
    async generatePaymentMethod(token) {
        const paymentMethod = await this.stripe.paymentMethods.create({
            type: 'card',
            card: { token }
        });
        return paymentMethod;
    }
    async createPaymentIntent(amount, emailuser, paymentMethodId) {
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: amount * 100,
            currency: this.configSerivce.stripe.currency,
            payment_method_types: ['card'],
            payment_method: paymentMethodId,
            description: emailuser
        });
        return paymentIntent;
    }
    async getPaymentDetail(paymentIntentId) {
        const detailOrder = await this.stripe.paymentIntents.retrieve(paymentIntentId);
        return detailOrder;
    }
};
StripeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0])
], StripeService);
exports.StripeService = StripeService;
//# sourceMappingURL=stripe.service.js.map