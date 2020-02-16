import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaModule } from './receta/receta.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RecetaModule,
    MongooseModule.forRoot('mongodb://localhost/recetas_v3')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
