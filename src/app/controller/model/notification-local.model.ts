import { Locale} from "./locale.model";
import {Redevable} from "./redevable.model";

export class NotificationLocale {
  public id!:number;
  public annee!:number;
  public numero!:number;
  public trimestre!:number;
  public locale= new Locale();
  public redevable= new Redevable();
  public  mantantEstimation!:number;

}
