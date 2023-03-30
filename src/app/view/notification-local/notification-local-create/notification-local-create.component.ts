import {Component, OnInit} from '@angular/core';
import {NotificationLocalService} from "../../../controller/service/notification-local.service";
import {NotificationLocal} from "../../../controller/model/notification-local.model";
import {Locale} from "../../../controller/model/locale.model";
import {Redevable} from "../../../controller/model/redevable.model";

@Component({
  selector: 'app-notification-local-create',
  templateUrl: './notification-local-create.component.html',
  styleUrls: ['./notification-local-create.component.css']
})
export class NotificationLocalCreateComponent  implements OnInit{

  constructor(private notificationService:NotificationLocalService) {
  }
  ngOnInit(): void {

  }

  public save() : void{
    this.notificationService.save().subscribe(
      data => {
        console.log(data)
        if (data == null) {
          alert('failure : error exist')
        }else{
          this.notifications.push({...this .notification});
          this.notificationService.notification=new NotificationLocal();
          alert('success :  saved')
        }
      }
    );
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
