import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tecnicos')
export class Tecnico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  ci: number;

  @Column()
  telefono: number;

  @Column()
  especialidad: string;

  @Column({ default: true })
  activo: boolean;
}
