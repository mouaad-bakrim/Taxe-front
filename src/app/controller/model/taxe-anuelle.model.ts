import {Redevable} from "./redevable.model";
import {CategorieLocale} from "./categorie-locale.model";
import {Local} from "./local.model";

export class TaxeAnuelle {
  public id !: number;
  public annee!: number;
  public redevable = new Redevable();
  public categorielocale = new CategorieLocale();
  public local = new Local();
}
