import { Injectable } from '@nestjs/common';
import { Receta } from './interfaces/receta.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class RecetaService {
    constructor(@InjectModel('Receta') private readonly recetaModel: Model<Receta>){}

    async listar(): Promise<Receta[]>{
        return await this.recetaModel.find().exec();
    }

    async buscarPorId(id: string): Promise<Receta>{
        return await this.recetaModel.findById(id).exec(); 
    }
}
