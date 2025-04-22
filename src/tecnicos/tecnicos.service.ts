import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tecnico } from './tecnicos.entity';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Injectable()
export class TecnicosService {
  constructor(
    @InjectRepository(Tecnico)
    private readonly tecnicoRepository: Repository<Tecnico>,
  ) {}

  async create(dto: CreateTecnicoDto) {
    const tecnico = this.tecnicoRepository.create(dto);
    const saved = await this.tecnicoRepository.save(tecnico);
    return {
      message: 'Técnico creado correctamente',
      data: saved,
    };
  }

  async findAll() {
    const tecnicos = await this.tecnicoRepository.find();
    return {
      message: 'Lista de técnicos obtenida correctamente',
      data: tecnicos,
    };
  }

  async findOne(id: number) {
    const tecnico = await this.tecnicoRepository.findOneBy({ id });
    if (!tecnico) {
      throw new NotFoundException(`Técnico con id ${id} no encontrado`);
    }
    return {
      message: 'Técnico encontrado',
      data: tecnico,
    };
  }

  async update(id: number, dto: UpdateTecnicoDto) {
    const tecnico = await this.findOne(id);
    const actualizado = Object.assign(tecnico.data, dto);
    const saved = await this.tecnicoRepository.save(actualizado);
    return {
      message: 'Técnico actualizado correctamente',
      data: saved,
    };
  }

  async remove(id: number) {
    const tecnico = await this.findOne(id);
    await this.tecnicoRepository.remove(tecnico.data);
    return {
      message: `Técnico con id ${id} eliminado correctamente`,
    };
  }
}
