import { Injectable } from '@angular/core';
import {NotificationLocal} from "../model/notification-local.model";
import {HttpClient} from "@angular/common/http";
import {Local} from "../model/local.model";
import {environment} from "../../environments/environment";
import {CategorieLocal} from "../model/categorie-local.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationLocalService {
  private _notification={} as NotificationLocal;
  private _notifications=[] as Array<NotificationLocal>;

  constructor(private http: HttpClient) { }
  public save(): void {
    console.log(this._notification)
    this.http.post<NotificationLocal>(environment.url+'notification-local/', this.notification).subscribe(data => {
      if (data != null) {
        console.log(data)
        alert('save success');
      } else {
        console.log(data)
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<NotificationLocal>>(environment.url+'notification-local/').subscribe(
      data => {
        this._notifications = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get notification(): NotificationLocal {
    if (this._notification == null) {
      this._notification == new NotificationLocal();
    }
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
