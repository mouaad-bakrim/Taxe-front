import {Component, OnInit} from '@angular/core';
import {NotificationLocaleSevice} from "../../../controller/service/notification-locale-sevice.service";
import {LocaleService} from "../../../controller/service/locale.service";
import {Locale} from "../../../controller/model/locale.model";
import {NotificationLocale} from "../../../controller/model/notification-local.model";

@Component({
  selector: 'app-locale-list',
  templateUrl: './locale-list.component.html',
  styleUrls: ['./locale-list.component.css']
})
export class LocaleListComponent implements OnInit{
  constructor(private localeService: LocaleService) {}

  ngOnInit(): void {
    this.findAll();
  }

  public deleteById(locale: Locale,  index: number): void {
    this.localeService.deleteById(locale.id).subscribe(data => {
      if (data>0){
        this.locales.splice(index,1);
      }else {
        alert('DEL ERROR')
      }
    });
  }
  public findAll():void {
    this.localeService.findAll().subscribe(data => {
      this.locales=data;
    });
  }
  get locale(): Locale {
    return this.localeService.locale;
  }

  set locale(value: Locale) {
    this.localeService.locale = value;
  }

  get locales(): Array<Locale> {
    return this.localeService.locales;
  }

  set locales(value: Array<Locale>) {
    this.localeService.locales = value;
  }
}
