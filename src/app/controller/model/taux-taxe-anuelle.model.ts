import {CategorieLocal} from "./categorie-local.model";


export class TauxTaxeAnuelle {
  public id!: number;
  public pourcentageRetardAnnuelle!: number;
  public pourcentageMajorationAnnuelle!: number;

  public dateApplicationFin!: Date;
  public dateApplicationDebut!: Date;


  public categorielocale = new CategorieLocal();
}
