import {Component} from '@angular/core';
import {NotificationLocalService} from "../../../controller/service/notification-local.service";
import {NotificationLocal} from "../../../controller/model/notification-local.model";
import {Local} from "../../../controller/model/local.model";
import {Redevable} from "../../../controller/model/redevable.model";

@Component({
  selector: 'app-notification-local-create',
  templateUrl: './notification-local-create.component.html',
  styleUrls: ['./notification-local-create.component.css']
})
export class NotificationLocalCreateComponent  {
  private _local1=new Local();
  private _redevable1=new Redevable();

  constructor(private notificationService:NotificationLocalService) {
  }


  public save() : void{
    this.notification.local=this.local1;
    this.notification.redevable=this.redevable1;
    this.notificationService.save().subscribe(
      data => {
        console.log(data)
        if (data == null) {
          alert('failure : error exist')
        }else{
          //this.notificationService.notification = null;
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


  get local1(): Local {
    return this._local1;
  }

  set local1(value: Local) {
    this._local1 = value;
  }

  get redevable1(): Redevable {
    return this._redevable1;
  }

  set redevable1(value: Redevable) {
    this._redevable1 = value;
  }
}
