import {Injectable} from '@angular/core';
import {Locale} from "../model/locale.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private _locale = new Locale;
  private _locales =new Array<Locale>;

  constructor(private http: HttpClient) {
  }

  public save(): Observable<Locale> {
   return  this.http.post<Locale>(environment.url + 'local/', this.locale);
  }
  public deleteById(id: number): Observable<number> {
    return this.http.delete<number>(environment.url+'local/'+id);
  }

  public findAll(): Observable<Array<Locale>> {
    return this.http.get<Array<Locale>>(environment.url+'local/');
  }


  get locale(): Locale {
    return this._locale;
  }

  set locale(value: Locale) {
    this._locale = value;
  }

  get locales(): Array<Locale> {
    return this._locales;
  }

  set locales(value: Array<Locale>) {
    this._locales = value;
  }
}
