import { Receta } from './interfaces/receta.interface';
import { Model } from 'mongoose';
export declare class RecetaService {
    private readonly recetaModel;
    constructor(recetaModel: Model<Receta>);
    listar(): Promise<Receta[]>;
    buscarPorId(id: string): Promise<Receta>;
}
