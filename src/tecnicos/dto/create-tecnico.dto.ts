import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateTecnicoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsNotEmpty()
  ci: number;

  @IsString()
  @IsNotEmpty()
  telefono: number;

  @IsString()
  @IsNotEmpty()
  especialidad: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
