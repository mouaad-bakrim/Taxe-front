import { Component } from '@angular/core';
import {NotificationLocale} from "../../../controller/model/notification-local.model";
import {NotificationLocaleSevice} from "../../../controller/service/notification-locale-sevice.service";

@Component({
  selector: 'app-notification-locale-create',
  templateUrl: './notification-locale-create.component.html',
  styleUrls: ['./notification-locale-create.component.css']
})
export class NotificationLocaleCreateComponent {
  constructor(private notificationLocaleSevice:NotificationLocaleSevice) {
  }
  ngOnInit(): void {

  }

  public save() : void{
    this.notificationLocaleSevice.save().subscribe(
      data => {
        if (data == null) {
          alert('failure : error exist')
        }else{
         this.notificationLocales.push({...this .notificationLocale});
         this.notificationLocaleSevice.notificationLocale=new NotificationLocale();
          alert('success :  saved')
        }
      }
    );
  }

  get notificationLocale(): NotificationLocale {
    return this.notificationLocaleSevice.notificationLocale;
  }

  set notificationLocale(value: NotificationLocale) {
    this.notificationLocaleSevice.notificationLocale = value;
  }

  get notificationLocales(): Array<NotificationLocale> {
    return this.notificationLocaleSevice.notificationLocales;
  }

  set notificationLocales(value: Array<NotificationLocale>) {
    this.notificationLocaleSevice.notificationLocales = value;
  }
}
