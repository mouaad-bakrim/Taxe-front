import { Injectable } from '@angular/core';
import {NotificationLocal} from "../model/notification-local.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationLocalService {
  private _notification = {} as NotificationLocal;
  private _notifications = [] as Array<NotificationLocal>;

  constructor(private _http: HttpClient) {
  }
  public save(): Observable<NotificationLocal> {
    return this.http.post<NotificationLocal>(environment.url+'notification-local/', this.notification);
  }
  public findAll(): Observable<Array<NotificationLocal>> {
    return this._http.get<Array<NotificationLocal>>(environment.url+'notification-local/');
  }


  get notification(): NotificationLocal {
    return this._notification;
  }

  set notification(value: NotificationLocal) {
    this._notification = value;
  }

  get notifications(): Array<NotificationLocal> {
    return this._notifications;
  }

  set notifications(value: Array<NotificationLocal>) {
    this._notifications = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
