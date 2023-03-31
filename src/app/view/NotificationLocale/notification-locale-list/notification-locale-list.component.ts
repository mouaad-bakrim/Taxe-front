import {Component, OnInit} from '@angular/core';
import {NotificationLocaleSevice} from "../../../controller/service/notification-locale-sevice.service";
import {NotificationLocale} from "../../../controller/model/notification-local.model";

@Component({
  selector: 'app-notification-locale-list',
  templateUrl: './notification-locale-list.component.html',
  styleUrls: ['./notification-locale-list.component.css']
})
export class NotificationLocaleListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private notificationLocaleSevice: NotificationLocaleSevice) {}



  public findAll():void {
    this.notificationLocaleSevice.findAll().subscribe(data => {
      this.notificationLocales=data;

     });
  }
  public deleteById(notificationLocale:NotificationLocale,  index: number): void {
    this.notificationLocaleSevice.deleteById(notificationLocale.id).subscribe(data => {
      if (data>0){
        this.notificationLocales.splice(index,1);
      }else {
        alert('DEL ERROR')
      }
    });
  }


  get notificationLocale(): NotificationLocale {
    return this.notificationLocaleSevice.notificationLocale;
  }

  set notificationLocale(value: NotificationLocale) {
    this.notificationLocaleSevice.notificationLocale= value;
  }

  get notificationLocales(): Array<NotificationLocale> {
    return this.notificationLocaleSevice.notificationLocales;
  }

  set notificationLocales(value: Array<NotificationLocale>) {
    this.notificationLocaleSevice.notificationLocales= value;
  }

}
