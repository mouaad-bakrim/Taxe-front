import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../../controller/service/locale.service";
import {Locale} from "../../../controller/model/locale.model";
import {Redevable} from "../../../controller/model/redevable.model";
import {CategorieLocale} from "../../../controller/model/categorie-locale.model";
import {Rue} from "../../../controller/model/rue.model";

@Component({
  selector: 'app-local-create',
  templateUrl: './local-create.component.html',
  styleUrls: ['./local-create.component.css']
})
export class LocalCreateComponent implements OnInit{
   _redevable = new Redevable();
   _catgorieLocale= new CategorieLocale();
  _rue= new Rue();

  constructor(private localeService: LocaleService) { }

  ngOnInit(): void {

  }


  public save(): void {
    this.localeService.save()
  }

  get locale(): Locale{

    return this.localeService.locale;
  }

  set locale(value: Locale) {
    this.localeService.locale = value;
  }

  get locales(): Array<Locale> {
    return this.localeService.locales;
  }

  set locales(value: Array<Locale>) {
    this.localeService.locales= value;
  }


  get redevable(): Redevable {
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get catgorieLocale(): CategorieLocale {
    return this._catgorieLocale;
  }

  set catgorieLocale(value: CategorieLocale) {
    this._catgorieLocale = value;
  }

  get rue(): Rue {
    return this._rue;
  }

  set rue(value: Rue) {
    this._rue = value;
  }
}
