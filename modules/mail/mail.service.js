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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendQrCodeEmail(email, qrCode, nameuser) {
        let name = 'qrcodemanilla';
        await this.mailerService.sendMail({
            to: email,
            subject: 'Pulsera Aprobada!',
            template: name,
            context: {
                name: nameuser,
                qrcode: qrCode
            },
        });
    }
    async sendEmailForgotPassword(email, url) {
        let name = 'forgotpassword';
        await this.mailerService.sendMail({
            to: email,
            subject: 'Recuperar Contraseña',
            template: name,
            context: {
                url: url,
            },
        });
    }
    async sendPulseraEnviada(email, nameuser) {
        let name = 'pulseraenviada';
        await this.mailerService.sendMail({
            to: email,
            subject: 'Pulsera Enviada!',
            template: name,
            context: {
                name: nameuser,
            },
        });
    }
    async sendPulseraEntregada(email, nameuser) {
        let name = 'pulseraentregada';
        await this.mailerService.sendMail({
            to: email,
            subject: 'Pulsera Entregada!',
            template: name,
            context: {
                name: nameuser,
            },
        });
    }
    async sendCorreoBienvenida(email, nameuser) {
        let name = 'correobienvenida';
        await this.mailerService.sendMail({
            to: email,
            subject: 'Bienvenido a EyedMx!',
            template: name,
            context: {
                name: nameuser,
            },
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map