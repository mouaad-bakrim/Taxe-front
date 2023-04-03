import {Secteur} from "./secteur.model";

export class Quartier {
  public id!: number;
  public code!: number;
  public labelle!: string;
  public secteur = new Secteur();


}
