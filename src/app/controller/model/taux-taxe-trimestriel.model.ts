import {CategorieLocale} from "./categorie-locale.model";


export class TauxTaxeTrimestriel {
  public id!:number;
  public pourcentageRetard!:number;
  public pourcentageMajoration!: number;
  public montantParNuite!:number;
  public dateApplicationFin!:Date;
  public dateApplicationDebut!:Date;

  public date!:Date;

  public categorielocale = new CategorieLocale();
}
