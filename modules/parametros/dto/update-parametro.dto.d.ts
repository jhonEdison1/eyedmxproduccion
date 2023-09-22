import { CreateParametroDto } from './create-parametro.dto';
declare const UpdateParametroDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateParametroDto>>;
export declare class UpdateParametroDto extends UpdateParametroDto_base {
    readonly valor: string;
}
export {};
