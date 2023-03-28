import {CategorieLocal} from "./categorie-local.model";


export class TauxTaxeTrimestriel {
  public id!:number;
  public pourcentageRetard!:number;
  public pourcentageMajoration!: number;
  public montantParNuite!:number;
  public dateApplicationFin!:Date;
  public date!:Date;

  public categorielocale = new CategorieLocal();
}
