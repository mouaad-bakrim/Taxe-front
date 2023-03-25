import { Injectable } from '@angular/core';
import {TaxeTrimestriel} from "../model/taxe-trimestriel.model";
import {HttpClient} from "@angular/common/http";
import {TaxeAnuelle} from "../model/taxe-anuelle.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaxeTrimestrielService {
  private _taxeTtrimestriel={} as TaxeTrimestriel;
  private _taxeTtrimestriels=[] as Array<TaxeTrimestriel>;

  constructor(private http: HttpClient) { }
  public save(): void {
    this.http.post<TaxeTrimestriel>(environment.url+'taxeSejourTrimestrie/', this.taxeTtrimestriel).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<TaxeTrimestriel>>(environment.url+'taxeSejourTrimestrie/').subscribe(
      data => {
        this._taxeTtrimestriels = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get taxeTtrimestriel(): TaxeTrimestriel {

    if (this._taxeTtrimestriel == null) {
      this._taxeTtrimestriel == new TaxeTrimestriel();
    }
    return this._taxeTtrimestriel;
  }

  set taxeTtrimestriel(value: TaxeTrimestriel) {
    this._taxeTtrimestriel = value;
  }

  get taxeTtrimestriels(): Array<TaxeTrimestriel> {
    return this._taxeTtrimestriels;
  }

  set taxeTtrimestriels(value: Array<TaxeTrimestriel>) {
    this._taxeTtrimestriels = value;
  }
}
