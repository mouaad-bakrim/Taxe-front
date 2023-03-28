import {Component, OnInit} from '@angular/core';
import {NotificationLocalService} from "../../../controller/service/notification-local.service";
import {NotificationLocal} from "../../../controller/model/notification-local.model";

@Component({
  selector: 'app-notification-local-list',
  templateUrl: './notification-local-list.component.html',
  styleUrls: ['./notification-local-list.component.css']
})
export class NotificationLocalListComponent implements OnInit{


  constructor(private _notificationLocalService: NotificationLocalService) {}

  get notificationLocalService(): NotificationLocalService {
    return this._notificationLocalService;
  }

  set notificationLocalService(value: NotificationLocalService) {
    this._notificationLocalService = value;
  }

  public findAll():void{
    this._notificationLocalService.findAll().subscribe(
      data =>{
        this.notifications = data
      }
    );
  }
  get notification(): NotificationLocal {
    return this._notificationLocalService.notification;
  }

  set notification(value: NotificationLocal) {
    this._notificationLocalService.notification = value;
  }

  get notifications(): Array<NotificationLocal> {
    return this._notificationLocalService.notifications;
  }

  set notifications(value: Array<NotificationLocal>) {
    this._notificationLocalService.notifications = value;
  }

  ngOnInit(): void {
    this.findAll();
  }
}
