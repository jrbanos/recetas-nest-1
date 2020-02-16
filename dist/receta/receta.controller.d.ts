import { RecetaService } from './receta.service';
export declare class RecetaController {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    listar(): Promise<import("./interfaces/receta.interface").Receta[]>;
    buscarPorId(id: string): Promise<{
        ok: boolean;
        resultado: import("./interfaces/receta.interface").Receta;
        error?: undefined;
    } | {
        ok: boolean;
        error: string;
        resultado?: undefined;
    }>;
}
