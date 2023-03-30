import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../../controller/service/local.service";
import {Local} from "../../../controller/model/local.model";
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

  constructor(private localeService: LocalService) { }

  ngOnInit(): void {

  }


  public save(): void {
    this.localeService.save()
  }

  get local(): Local{

    return this.localeService.local;
  }

  set local(value: Local) {
    this.localeService.local = value;
  }

  get locals(): Array<Local> {
    return this.localeService.locals;
  }

  set locals(value: Array<Local>) {
    this.localeService.locals= value;
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
