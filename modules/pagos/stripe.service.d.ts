import { ConfigType } from "@nestjs/config";
import config from "src/config";
import Stripe from "stripe";
export declare class StripeService {
    private readonly configSerivce;
    private readonly stripe;
    constructor(configSerivce: ConfigType<typeof config>);
    generatePaymentMethod(token: string): Promise<Stripe.Response<Stripe.PaymentMethod>>;
    createPaymentIntent(amount: number, emailuser: string, paymentMethodId: string): Promise<Stripe.Response<Stripe.PaymentIntent>>;
    getPaymentDetail(paymentIntentId: string): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
