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
  public tauxTaxeAnuelle={} as TauxTaxeAnuelle;
  public tauxTaxeAnuelles: Array<TauxTaxeAnuelle>=[];

  private _url = "http://localhost:8036/api/v1/tauxTaxeAnuelle/";
  constructor(private http: HttpClient) { }
  /*
  public save(): void {
    this.http.post<TauxTaxeTrimestriel>(environment.url+'taux-taxe-trimestriel/', this.tauxTaxe).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<TauxTaxeTrimestriel>>(environment.url+'taux-taxe-trimestriel/').subscribe(
      data => {
        this.tauxTaxeTrimestriels = data;
      }, error => {
        alert('Error');
      }
    );
  }*/

  public save(tauxTaxeAnuelle: TauxTaxeAnuelle): Observable<TauxTaxeAnuelle> {
    return this.http.post<TauxTaxeAnuelle>(this._url, tauxTaxeAnuelle);
  }
  public findAll(): Observable<Array<TauxTaxeAnuelle>> {
    return this.http.get<Array<TauxTaxeAnuelle>>(this._url);
  }
  public findByDateApplicationFin(dateApplicationFin: Date): Observable<TauxTaxeAnuelle> {

    return this.http.get<TauxTaxeAnuelle>(environment.url+'TauxTaxeAnuelle/dateApplicationFin/'+dateApplicationFin);
  }


  get tauxTaxe(): TauxTaxeAnuelle {
    if (this.tauxTaxeAnuelle == null) {
      this.tauxTaxeAnuelle == new TauxTaxeAnuelle();
    }
    return this.tauxTaxeAnuelle;
  }

  set tauxTaxe(value: TauxTaxeAnuelle) {
    this.tauxTaxeAnuelle = value;
  }

  get tauxTaxes(): Array<TauxTaxeAnuelle> {
    return this.tauxTaxeAnuelles;
  }

  set tauxTaxes(value: Array<TauxTaxeAnuelle>) {
    this.tauxTaxeAnuelles = value;
  }
}
