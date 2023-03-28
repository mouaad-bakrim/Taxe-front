import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../../controller/service/local.service";
import {Local} from "../../../controller/model/local.model";
import {Redevable} from "../../../controller/model/redevable.model";
import {CategorieLocal} from "../../../controller/model/categorie-local.model";
import {Rue} from "../../../controller/model/rue.model";

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit{
  private _redevable = new Redevable();

  private _rue= new Rue();
  private _catgorieLocal= new CategorieLocal();

  constructor(private _localeService: LocalService) { }

  ngOnInit(): void {
    this._localeService.findAll();
  }

public findAll():void{
    this._localeService.findAll();
}

  get local(): Local{

    return this._localeService.local;
  }

  set local(value: Local) {
    this._localeService.local = value;
  }

  get locals(): Array<Local> {
    return this._localeService.locals;
  }

  set locals(value: Array<Local>) {
    this._localeService.locals= value;
  }

  public save() {
    this.localeService.save();
  }
  get redevable(): Redevable {
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }


  get catgorieLocal(): CategorieLocal {
    return this._catgorieLocal;
  }

  set catgorieLocal(value: CategorieLocal) {
    this._catgorieLocal = value;
  }

  get localeService(): LocalService {
    return this._localeService;
  }

  set localeService(value: LocalService) {
    this._localeService = value;
  }

  get rue(): Rue {
    return this._rue;
  }

  set rue(value: Rue) {
    this._rue = value;
  }
}
