import {CategorieLocale} from "./categorie-locale.model";
import {Redevable} from "./redevable.model";
import {Rue} from "./rue.model";

export class Locale {
  public id!: number;
  public ref!: string;
  public rue = new Rue();
  public derniereAnneePaye!: number;

  public dernierTrimestrePaye!: number;

  public redevable = new Redevable();

  public categorieLocale = new CategorieLocale();

}
