import {Quartier} from "./quartier.model";

export class Rue {
  public id !: number;
  public code!: number;
  public libelle !: string;
  public quartiere = new Quartier();


}
