import { Injectable } from '@angular/core';
import {TaxeAnuelle} from "../model/taxe-anuelle.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaxeAnuelleService {
  private _taxeAnuelle={} as TaxeAnuelle;
  private _taxeAnuelles=[] as Array<TaxeAnuelle>;

  constructor(private http: HttpClient) { }
  public save(): void {
    this.http.post<TaxeAnuelle>(environment.url+'taxe-anuelle/', this.taxeAnuelle).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<TaxeAnuelle>>(environment.url+'taxe-anuelle/').subscribe(
      data => {
        this._taxeAnuelles = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get taxeAnuelle(): TaxeAnuelle {
    if (this._taxeAnuelle == null) {
      this._taxeAnuelle == new TaxeAnuelle();
    }
    return this._taxeAnuelle;
  }

  set taxeAnuelle(value: TaxeAnuelle) {
    this._taxeAnuelle = value;
  }

  get taxeAnuelles(): Array<TaxeAnuelle> {
    return this._taxeAnuelles;
  }

  set taxeAnuelles(value: Array<TaxeAnuelle>) {
    this._taxeAnuelles = value;
  }
}
