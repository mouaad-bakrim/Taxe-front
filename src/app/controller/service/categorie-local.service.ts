import { Injectable } from '@angular/core';
import {CategorieLocal} from "../model/categorie-local.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategorieLocalService {

 private _categorie={} as CategorieLocal;
 private _categories=[] as Array<CategorieLocal>;

  constructor(private _http: HttpClient) { }
  public save(): void {
    this._http.post<CategorieLocal>(environment.url+'categorie/', this.categorie).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this._http.get<Array<CategorieLocal>>(environment.url+'categorie/').subscribe(
      data => {
        this._categories = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get categorie(): CategorieLocal {
    if (this._categorie== null) {
      this._categorie == new CategorieLocal();
    }
    return this._categorie;
  }

  set categorie(value: CategorieLocal) {
    this._categorie = value;
  }

  get categories(): Array<CategorieLocal> {
    return this._categories;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  set categories(value: Array<CategorieLocal>) {
    this._categories = value;
  }
}
