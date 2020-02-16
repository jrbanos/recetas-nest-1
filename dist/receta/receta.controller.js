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
const common_1 = require("@nestjs/common");
const receta_service_1 = require("./receta.service");
let RecetaController = class RecetaController {
    constructor(recetaService) {
        this.recetaService = recetaService;
    }
    async listar() {
        return this.recetaService.listar();
    }
    async buscarPorId(id) {
        try {
            let resultado = await this.recetaService.buscarPorId(id);
            if (resultado)
                return { ok: true, resultado: resultado };
            throw new Error();
        }
        catch (Error) {
            return { ok: false, error: 'Error buscando receta' };
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "listar", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "buscarPorId", null);
RecetaController = __decorate([
    common_1.Controller('receta'),
    __metadata("design:paramtypes", [receta_service_1.RecetaService])
], RecetaController);
exports.RecetaController = RecetaController;
//# sourceMappingURL=receta.controller.js.map