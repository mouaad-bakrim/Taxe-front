import {Injectable} from '@angular/core';
import {NotificationLocale} from "../model/notification-local.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationLocaleSevice {
  private _notificationLocale = new NotificationLocale();
  private _notificationLocales = new Array<NotificationLocale>();

  constructor(private http: HttpClient) {
  }

  public save(): Observable<NotificationLocale> {
    return this.http.post<NotificationLocale>(environment.url + 'notification-locale/', this.notificationLocale);
  }

  public deleteById(id: number): Observable<number> {
    return this.http.delete<number>(environment.url + 'notification-locale/' + id);
  }

  public findAll(): Observable<Array<NotificationLocale>> {
    return this.http.get<Array<NotificationLocale>>(environment.url + 'notification-locale/');
  }


  get notificationLocale(): NotificationLocale {
    return this._notificationLocale;
  }

  set notificationLocale(value: NotificationLocale) {
    this._notificationLocale = value;
  }

  get notificationLocales(): Array<NotificationLocale> {
    return this._notificationLocales;
  }

  set notificationLocales(value: Array<NotificationLocale>) {
    this._notificationLocales = value;
  }
}
