import { CreatePagoDto } from './create-pago.dto';
declare const UpdatePagoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePagoDto>>;
export declare class UpdatePagoDto extends UpdatePagoDto_base {
    token: string;
}
export {};
