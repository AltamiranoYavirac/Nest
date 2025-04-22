import { Module } from '@nestjs/common';
import { TecnicosService } from './tecnicos.service';
import { TecnicosController } from './tecnicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnico } from './tecnicos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tecnico])],
  providers: [TecnicosService],
  controllers: [TecnicosController]
})
export class TecnicosModule { }
