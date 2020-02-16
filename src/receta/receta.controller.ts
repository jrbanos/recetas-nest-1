import { Controller, Get, Param } from '@nestjs/common';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {

    constructor(private readonly recetaService: RecetaService){}

    @Get()
    async listar() {
        return this.recetaService.listar();
    }

    @Get('/:id')
    async buscarPorId(@Param('id') id: string) {
        try{
            let resultado = await this.recetaService.buscarPorId(id);
            if(resultado)
                return {ok: true,resultado: resultado};
                throw new Error();
        }catch(Error) {
            return{ok: false, error: 'Error buscando receta'};
        }
    }

}
