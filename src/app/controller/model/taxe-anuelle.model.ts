import {Redevable} from "./redevable.model";
import {CategorieLocale} from "./categorie-locale.model";
import {Locale} from "./locale.model";

export class TaxeAnuelle {
  public id !: number;
  public annee!: number;
  public redevable = new Redevable();
  public categorielocale = new CategorieLocale();
  public locale = new Locale();
}
