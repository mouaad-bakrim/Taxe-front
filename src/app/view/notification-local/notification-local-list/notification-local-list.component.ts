import {Component} from '@angular/core';
import {NotificationLocalService} from "../../../controller/service/notification-local.service";
import {NotificationLocal} from "../../../controller/model/notification-local.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notification-local-list',
  templateUrl: './notification-local-list.component.html',
  styleUrls: ['./notification-local-list.component.css']
})
export class NotificationLocalListComponent{

  ngOnInit(): void {
    this.findAll();
  }
  constructor(private notificationLocalService: NotificationLocalService) {}



  public findAll():void {
    this.notificationLocalService.findAll().subscribe(data => {
        this.notifications= data;});
  }

  public deleteById(notification:NotificationLocal,  index: number): void {
    this.notificationLocalService.deleteById(notification.id).subscribe(data => {
      if (data>0){
        this.notifications.splice(index,1);
      }else {
        alert('DEL ERROR')
      }
    });
  }






  get notification(): NotificationLocal {
    return this.notificationLocalService.notification;
  }

  set notification(value: NotificationLocal) {
    this.notificationLocalService.notification = value;
  }

  get notifications(): Array<NotificationLocal> {
    return this.notificationLocalService.notifications;
  }

  set notifications(value: Array<NotificationLocal>) {
    this.notificationLocalService.notifications = value;
  }

}
