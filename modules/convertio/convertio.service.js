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
exports.ConvertioService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const parametros_service_1 = require("../parametros/parametros.service");
let ConvertioService = class ConvertioService {
    constructor(configSerivce, httpService, parametrosService) {
        this.configSerivce = configSerivce;
        this.httpService = httpService;
        this.parametrosService = parametrosService;
    }
    async newConversion(file) {
        const apiKey = await this.parametrosService.findOneByName('apikeyconvertio');
        console.log(apiKey);
        const ouputformat = 'dxf';
        const url = this.configSerivce.convertio.url + '/convert';
        const response = await this.httpService.axiosRef.post(url, {
            apikey: apiKey,
            input: 'url',
            file: file,
            outputformat: ouputformat,
            wait: true
        });
        return response.data;
    }
    async getConversionData(id) {
        const url = this.configSerivce.convertio.url + '/convert/' + id + '/dl';
        const response = await this.httpService.axiosRef.get(url, {});
        return response.data;
    }
    async getConversionStatus(id) {
        const url = this.configSerivce.convertio.url + '/convert/' + id + '/status';
        const response = await this.httpService.axiosRef.get(url, {});
        return response.data;
    }
    async balance() {
        const apiKey = await this.parametrosService.findOneByName('apikeyconvertio');
        const url = this.configSerivce.convertio.url + '/balance';
        const response = await this.httpService.axiosRef.post(url, {
            apikey: apiKey,
        });
        return response.data;
    }
};
ConvertioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0, axios_1.HttpService,
        parametros_service_1.ParametrosService])
], ConvertioService);
exports.ConvertioService = ConvertioService;
//# sourceMappingURL=convertio.service.js.map