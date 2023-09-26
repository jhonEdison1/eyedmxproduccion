import { EntradasService } from './entradas.service';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { FilterEntradaDto } from './dto/filte-entrada.dto';
export declare class EntradasController {
    private readonly entradasService;
    constructor(entradasService: EntradasService);
    findAll(req: any, params?: FilterEntradaDto): Promise<{
        entradas: Omit<import("mongoose").Document<unknown, {}, import("./entities/entrada.entity").Entrada> & import("./entities/entrada.entity").Entrada & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalDocuments: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateEntradaDto: UpdateEntradaDto): string;
    remove(id: string): string;
}
