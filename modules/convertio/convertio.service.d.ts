import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { ParametrosService } from '../parametros/parametros.service';
export declare class ConvertioService {
    private readonly configSerivce;
    private readonly httpService;
    private readonly parametrosService;
    constructor(configSerivce: ConfigType<typeof config>, httpService: HttpService, parametrosService: ParametrosService);
    newConversion(file: any): Promise<any>;
    getConversionData(id: any): Promise<any>;
    getConversionStatus(id: any): Promise<any>;
    balance(): Promise<any>;
}
