import {Redevable} from "./redevable.model";
import {CategorieLocal} from "./categorie-local.model";
import {Local} from "./local.model";

export class TaxeAnuelle {
  public id !: number;
  public annee!: number;
  public redevable = new Redevable();
  public categorielocal = new CategorieLocal();
  public local = new Local();
}
