import {Injectable} from '@angular/core';
import {CategorieLocale} from "../model/categorie-locale.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Local} from "../model/local.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieLocaleService {

  private _categorieLocale = {} as CategorieLocale;
  private _categorieLocals = [] as Array<CategorieLocale>;

  constructor(private _http: HttpClient) {
  }

  public save(): void {
    this._http.post<CategorieLocale>(
      environment.url + 'categoriel-locale-sejour/', this.categorieLocale).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public findAll(): void {
    this._http.get<Array<CategorieLocale>>(environment.url + 'categoriel-locale-sejour/').subscribe(
      data => {
        this._categorieLocals = data;
      }, error => {
        alert('Error');
      }
    );
  }


  get categorieLocale(): CategorieLocale {
    if (this._categorieLocale == null) {
      this._categorieLocale = new CategorieLocale();
    }
    return this._categorieLocale;
  }

  set categorieLocale(value: CategorieLocale) {
    this._categorieLocale = value;
  }

  get categorieLocals(): Array<CategorieLocale> {
    return this._categorieLocals;
  }

  set categorieLocals(value: Array<CategorieLocale>) {
    this._categorieLocals = value;
  }
}
