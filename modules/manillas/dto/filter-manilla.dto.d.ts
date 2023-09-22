import { estadoManilla } from "../entities/manilla.entity";
import { Tipos } from "src/modules/iam/authentication/authentication.common.service";
export declare class FilterManillaDto {
    limit: number;
    offset: number;
    estado: estadoManilla;
    tipo: Tipos;
}
