import { Injectable } from '@angular/core';
import {TauxTaxeTrimestriel} from "../model/taux-taxe-trimestriel.model";
import {HttpClient} from "@angular/common/http";
import {Rue} from "../model/rue.model";
import {environment} from "../../environments/environment";
import {Secteur} from "../model/secteur.model";

@Injectable({
  providedIn: 'root'
})
export class TauxTaxeTrimestrielService {
  private _tauxTaxe={} as TauxTaxeTrimestriel;
  private _tauxTaxes=[] as  Array<TauxTaxeTrimestriel>;

  constructor(private http: HttpClient) { }
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
        this._tauxTaxes = data;
      }, error => {
        alert('Error');
      }
    );
  }


  get tauxTaxe(): TauxTaxeTrimestriel {
    if (this._tauxTaxe == null) {
      this._tauxTaxe == new TauxTaxeTrimestriel();
    }
    return this._tauxTaxe;
  }

  set tauxTaxe(value: TauxTaxeTrimestriel) {
    this._tauxTaxe = value;
  }

  get tauxTaxes(): Array<TauxTaxeTrimestriel> {
    return this._tauxTaxes;
  }

  set tauxTaxes(value: Array<TauxTaxeTrimestriel>) {
    this._tauxTaxes = value;
  }
}
