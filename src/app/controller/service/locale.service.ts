import {Injectable} from '@angular/core';
import {Locale} from "../model/locale.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Redevable} from "../model/redevable.model";
import {NotificationLocal} from "../model/notification-local.model";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  public _locale = {} as Locale;
  public _locales = [] as Array<Locale>;

  constructor(private http: HttpClient) {
  }

  public save(): void {
    this.http.post<Locale>(environment.url + 'local/', this.locale).subscribe(data => {
      console.log(this.locale);
      console.log(data);
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public update(): void {
    this.http.post<Locale>(environment.url + 'local/', this.locale).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public findAll(): Observable<Array<Locale>> {
    return this.http.get<Array<Locale>>(environment.url+'local/');
  }


  get locale(): Locale {
    if (this._locale == null) {
      this._locale = new Locale();
    }
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
