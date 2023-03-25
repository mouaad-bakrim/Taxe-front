import {CategorieLocal} from "./categorie-local.model";
import {Redevable} from "./redevable.model";
import {Rue} from "./rue.model";

export class Local {
  public id!: number;
  public ref!: string;

  public categorieLocal =new CategorieLocal();
  public rue = new Rue();
  public derniereAnneePaye!:number;
  public dernierTrimestrePaye!:number;
  public redevable =new Redevable();

}
