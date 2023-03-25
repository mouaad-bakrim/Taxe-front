import {Redevable} from "./redevable.model";
import {CategorieLocal} from "./categorie-local.model";
import {TauxTaxeTrimestriel} from "./taux-taxe-trimestriel.model";

export class TaxeTrimestriel {
  public id !: number;
  public trimestre !:number;
  public NombreDeMoisRetard!: number;
  public nombreDeNuite !: number;
  public montantBase!: number;
  public montantRetard !: number;
  public montantMajoration!: number;

  public montantTotal!: number;
  public redevable = new Redevable();
  public categorieLocal = new CategorieLocal();
  public tauxTaxeTrimestriel = new TauxTaxeTrimestriel();

}
