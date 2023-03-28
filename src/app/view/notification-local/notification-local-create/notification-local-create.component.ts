import {Component, OnInit} from '@angular/core';
import {NotificationLocalService} from "../../../controller/service/notification-local.service";
import {Redevable} from "../../../controller/model/redevable.model";
import {Local} from "../../../controller/model/local.model";
import {NotificationLocal} from "../../../controller/model/notification-local.model";

@Component({
  selector: 'app-notification-local-create',
  templateUrl: './notification-local-create.component.html',
  styleUrls: ['./notification-local-create.component.css']
})
export class NotificationLocalCreateComponent  implements OnInit{
  public local1=new Local();
  public redevable =new Redevable();




  constructor(private notificationService:NotificationLocalService) {
  }

  ngOnInit(): void {
  }
  public save(): void {
    this.notification.local=this.local1;
    this.notification.redevable=this.redevable;
    this.notificationService.save();
  }
  get notification(): NotificationLocal {
    return this.notificationService.notification;
  }

  set notification(value: NotificationLocal) {
    this.notificationService.notification = value;
  }

  get notifications(): Array<NotificationLocal> {
    return this.notificationService.notifications;
  }

  set notifications(value: Array<NotificationLocal>) {
    this.notificationService.notifications = value;
  }


}
