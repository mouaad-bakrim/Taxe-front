import {Injectable} from '@angular/core';
import {TauxTaxeTrimestriel} from "../model/taux-taxe-trimestriel.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TauxtaxetrimestrielService {
  public _tauxTaxeTrimestriel = new TauxTaxeTrimestriel();
  public _tauxTaxeTrimestriels = new Array<TauxTaxeTrimestriel>();

  private _url = "http://localhost:8036/api/v1/tauxTaxeTrimestriel/";

  constructor(private http: HttpClient) {
  }


  public update(): Observable<TauxTaxeTrimestriel> {
    return this.http.put<TauxTaxeTrimestriel>(this._url, this.tauxTaxeTrimestriel);
  }

  public save(): Observable<TauxTaxeTrimestriel> {
    return this.http.post<TauxTaxeTrimestriel>(environment.url + 'taux-taxe-trimestriel/', this.tauxTaxeTrimestriel);
  }

  public findAll(): Observable<Array<TauxTaxeTrimestriel>> {
    return this.http.get<Array<TauxTaxeTrimestriel>>(environment.url + 'taux-taxe-trimestriel/');
  }

  public findByDateApplicationFin(dateApplicationFin: Date): Observable<TauxTaxeTrimestriel> {

    return this.http.get<TauxTaxeTrimestriel>(environment.url + 'TauxTaxeTrimestriel/dateApplicationFin/' + dateApplicationFin);
  }


  get tauxTaxeTrimestriels(): TauxTaxeTrimestriel[] {
    return this._tauxTaxeTrimestriels;
  }

  set tauxTaxeTrimestriels(value: TauxTaxeTrimestriel[]) {
    this._tauxTaxeTrimestriels = value;
  }

  get tauxTaxeTrimestriel(): TauxTaxeTrimestriel {
    return this._tauxTaxeTrimestriel;
  }

  set tauxTaxeTrimestriel(value: TauxTaxeTrimestriel) {
    this._tauxTaxeTrimestriel = value;
  }
}
