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

  constructor(private http: HttpClient) {
  }
  public save(): Observable<NotificationLocal> {
    return this.http.post<NotificationLocal>(environment.url+'notification-local/', this.notification);
  }
  public deleteById(id: number): Observable<number> {
    return this.http.delete<number>(environment.url+'notification-local/'+id);
  }
  public findAll(): Observable<Array<NotificationLocal>> {
    return this.http.get<Array<NotificationLocal>>(environment.url+'notification-local/');
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

}
