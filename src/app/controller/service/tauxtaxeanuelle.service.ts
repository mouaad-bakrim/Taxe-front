import {Injectable} from "@angular/core";
import {TauxTaxeAnuelle} from '../model/taux-taxe-anuelle.model';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {TauxTaxeTrimestriel} from "../model/taux-taxe-trimestriel.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TauxtaxeanuelleService {
  private _tauxTaxeAnuelle = {} as TauxTaxeAnuelle;
  private _tauxTaxeAnuelles: Array<TauxTaxeAnuelle> = [];

  constructor(private http: HttpClient) {
  }

  public save(): Observable<TauxTaxeAnuelle> {
    return this.http.post<TauxTaxeAnuelle>(environment.url + 'taux-taxe-anuelle/', this.tauxTaxeAnuelle.categorielocale);
  }

  /* public save(): void {
     this.http.post<TauxTaxeAnuelle>(environment.url + 'taux-taxe-anuelle/', this.tauxTaxeAnuelle).subscribe(data => {
       if (data != null) {
         alert('save success');
       } else {
         alert('save error::: ref exist');
       }
     });
   }*/

  /*
    public findAll(): void {
      this.http.get<Array<TauxTaxeAnuelle>>(environment.url + 'taux-taxe-anuelle/').subscribe(
        data => {
          this._tauxTaxeAnuelles = data;
        }, error => {
          alert('Error');
        }
      );
    }*/


  public findAll(): Observable<Array<TauxTaxeAnuelle>> {
    return this.http.get<Array<TauxTaxeAnuelle>>(environment.url + 'taux-taxe-anuelle/');
  }


  get tauxTaxeAnuelle(): TauxTaxeAnuelle {
    if (this._tauxTaxeAnuelle == null) {
      this._tauxTaxeAnuelle = new TauxTaxeAnuelle();
    }
    return this._tauxTaxeAnuelle;
  }

  set tauxTaxeAnuelle(value: TauxTaxeAnuelle) {
    this._tauxTaxeAnuelle = value;
  }

  get tauxTaxeAnuelles(): Array<TauxTaxeAnuelle> {
    if (this._tauxTaxeAnuelles == null) {
      this._tauxTaxeAnuelles = new Array<TauxTaxeAnuelle>();
    }
    return this._tauxTaxeAnuelles;
  }

  set tauxTaxeAnuelles(value: Array<TauxTaxeAnuelle>) {
    this._tauxTaxeAnuelles = value;
  }

  get url(): string {
    return this.url;
  }

  set url(value: string) {
    this.url = value;
  }
}
