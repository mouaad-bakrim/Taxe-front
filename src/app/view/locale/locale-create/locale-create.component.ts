import { Component } from '@angular/core';
import {LocaleService} from "../../../controller/service/locale.service";
import {Locale} from "../../../controller/model/locale.model";

@Component({
  selector: 'app-locale-create',
  templateUrl: './locale-create.component.html',
  styleUrls: ['./locale-create.component.css']
})
export class LocaleCreateComponent {
  public save() : void{
    this.localeService.save().subscribe(
      data => {
        if (data == null) {
          alert('failure : error exist')
        }else{
          this.locales.push({...this .locale});
           this.localeService.locale=new Locale();
          alert('success :  saved')
        }
      }
    );
  }


  constructor(private localeService:LocaleService) {
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
