import {CategorieLocale} from "./categorie-locale.model";


export class TauxTaxeTrimestriel {
  public id!: number;
  public reference!: string;
  public pourcentageRetard!: number;
  public pourcentageMajoration!: number;
  public montantParNuite!: number;
  public dateApplicationFin!: Date;
  public dateApplicationDebut!: Date;
  public categorielocale = new CategorieLocale();
}
