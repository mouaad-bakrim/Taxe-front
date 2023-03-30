import {Component} from '@angular/core';
import {LocaleService} from "../../../controller/service/locale.service";
import {Locale} from "../../../controller/model/locale.model";
import {Redevable} from "../../../controller/model/redevable.model";
import {CategorieLocale} from "../../../controller/model/categorie-locale.model";
import {Rue} from "../../../controller/model/rue.model";

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent {
  private _redevable = new Redevable();

  private _rue= new Rue();
  private _catgorieLocale= new CategorieLocale();

  constructor(private _localeService: LocaleService) { }

  ngOnInit(): void {
    this.findAll();
  }
  public save(): void {
    this.localeService.save();
  }

  public findAll(): void{
    this.localeService.findAll();
  }

  get locale(): Locale{

    return this._localeService.locale;
  }

  set locale(value: Locale) {
    this._localeService.locale = value;
  }

  get locales(): Array<Locale> {
    return this.localeService.locales;
  }

  set locales(value: Array<Locale>) {
    this._localeService.locales= value;
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

  get localeService(): LocaleService {
    return this._localeService;
  }

  set localeService(value: LocaleService) {
    this._localeService = value;
  }

  get rue(): Rue {
    return this._rue;
  }

  set rue(value: Rue) {
    this._rue = value;
  }
}
