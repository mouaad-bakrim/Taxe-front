import { Injectable } from '@angular/core';
import {TauxTaxeTrimestriel} from "../model/taux-taxe-trimestriel.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TauxtaxetrimestrielService {
  public tauxTaxeTrimestriel={} as TauxTaxeTrimestriel;
  public tauxTaxeTrimestriels: Array<TauxTaxeTrimestriel>=[];

  private _url = "http://localhost:8036/api/v1/tauxTaxeTrimestriel/";
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
  public update(tauxTaxeTrimestriel: TauxTaxeTrimestriel): Observable<TauxTaxeTrimestriel> {
    return this.http.post<TauxTaxeTrimestriel>(this._url, tauxTaxeTrimestriel);
  }
  public save(tauxTaxeTrimestriel: TauxTaxeTrimestriel): Observable<TauxTaxeTrimestriel> {
    return this.http.post<TauxTaxeTrimestriel>(this._url, tauxTaxeTrimestriel);
  }
  public findAll(): Observable<Array<TauxTaxeTrimestriel>> {
    return this.http.get<Array<TauxTaxeTrimestriel>>(this._url);
  }
  public findByDateApplicationFin(dateApplicationFin: Date): Observable<TauxTaxeTrimestriel> {

    return this.http.get<TauxTaxeTrimestriel>(environment.url+'TauxTaxeTrimestriel/dateApplicationFin/'+dateApplicationFin);
  }


  get tauxTaxe(): TauxTaxeTrimestriel {
    if (this.tauxTaxeTrimestriel == null) {
      this.tauxTaxeTrimestriel == new TauxTaxeTrimestriel();
    }
    return this.tauxTaxeTrimestriel;
  }

  set tauxTaxe(value: TauxTaxeTrimestriel) {
    this.tauxTaxeTrimestriel = value;
  }

  get tauxTaxes(): Array<TauxTaxeTrimestriel> {
    return this.tauxTaxeTrimestriels;
  }

  set tauxTaxes(value: Array<TauxTaxeTrimestriel>) {
    this.tauxTaxeTrimestriels = value;
  }
}
