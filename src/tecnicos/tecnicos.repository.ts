import { EntityRepository, Repository } from "typeorm";
import { Tecnico } from "./tecnicos.entity";

@EntityRepository(Tecnico)
export class TecnicoRepository extends Repository<Tecnico> {}