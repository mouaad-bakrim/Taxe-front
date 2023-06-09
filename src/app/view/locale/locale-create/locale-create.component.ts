import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../../controller/service/locale.service";
import {Locale} from "../../../controller/model/locale.model";
import {CategorieLocale} from "../../../controller/model/categorie-locale.model";
import {CategorieLocaleService} from "../../../controller/service/categorie-locale.service";
import {RueService} from "../../../controller/service/rue.service";
import {Rue} from "../../../controller/model/rue.model";

@Component({
  selector: 'app-locale-create',
  templateUrl: './locale-create.component.html',
  styleUrls: ['./locale-create.component.css']
})
export class LocaleCreateComponent implements OnInit {

  constructor(private localeService: LocaleService ,private categorieLocaleService :CategorieLocaleService,private rueService : RueService) {
  }
  ngOnInit(): void {
    this.findAllCategorie();
    this.findAllRue();
  }
  public save(): void {
    this.localeService.save().subscribe(
      data => {
        if (data == null) {
          alert('failure : error exist')
        } else {
          this.locales.push({...this.locale});
          this.localeService.locale = new Locale();
          alert('success :  saved')
        }
      }
    );
  }

  public findAllCategorie(): void {
    this.categorieLocaleService.findAll().subscribe(data => {
      this.categorieLocaleService.categorieLocales = data;
    });
  }

  public findAllRue(): void {
    this.rueService.findAll().subscribe(data => {
      this.rueService.rues = data;
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

  get categorieLocale(): CategorieLocale {
    return this.categorieLocaleService.categorieLocale;
  }

  set categorieLocale(value: CategorieLocale) {
    this.categorieLocaleService.categorieLocale = value;
  }

  get categorieLocales(): Array<CategorieLocale> {
    return this.categorieLocaleService._categorieLocales;
  }

  set categorieLocales(value: Array<CategorieLocale>) {
    this.categorieLocaleService._categorieLocales = value;
  }

  get rue(): Rue {
    return this.rueService.rue;
  }

  set rue(value: Rue) {
    this.rueService.rue = value;
  }

  get rues(): Array<Rue> {
    return this.rueService.rues;
  }

  set rues(value: Array<Rue>) {
    this.rueService.rues = value;
  }
}
