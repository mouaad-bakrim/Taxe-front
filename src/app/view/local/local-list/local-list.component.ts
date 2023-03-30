import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../../controller/service/locale.service";
import {Locale} from "../../../controller/model/locale.model";


@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit{

  constructor(private localeService: LocaleService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public save(): void {
    this.localeService.save();
  }

  public findAll():void {
    this.localeService.findAll().subscribe(data => {
      this.locales= data;
      console.log(this.locales);

    });
  }

  get locale(): Locale {
    return this.localeService._locale;
  }

  set locale(value: Locale) {
    this.localeService._locale = value;
  }

  get locales(): Locale[] {
    return this.localeService._locales;
  }

  set locales(value: Locale[]) {
    this.localeService._locales = value;
  }

}
