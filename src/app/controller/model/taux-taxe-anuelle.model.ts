import {CategorieLocal} from "./categorie-local.model";


export class TauxTaxeAnuelle {
  public id!:number;
  public pourcentageRetard!:number;
  public pourcentageMajoration!: number;

  public dateApplicationFin!:Date;
  public dateApplicationDebut!:Date;



  public categorielocale = new CategorieLocal();
}
