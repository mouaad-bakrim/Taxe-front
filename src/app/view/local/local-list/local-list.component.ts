import {Component} from '@angular/core';
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
export class LocalListComponent {
  private _redevable1 = new Redevable();

  private _rue1= new Rue();
  private _catgorieLocal1= new CategorieLocal();

  constructor(private _localeService: LocalService) { }

  ngOnInit(): void {
    this.findAll();
  }
  public save(): void {
    this.localeService.save();
  }

public findAll():void{
    this.localeService.findAll();
}

  get local(): Local{

    return this._localeService.local;
  }

  set local(value: Local) {
    this._localeService.local = value;
  }

  get locals(): Array<Local> {
    return this.localeService.locals;
  }

  set locals(value: Array<Local>) {
    this._localeService.locals= value;
  }



  get redevable(): Redevable {
    return this._redevable1;
  }

  set redevable(value: Redevable) {
    this._redevable1 = value;
  }


  get catgorieLocal(): CategorieLocal {
    return this._catgorieLocal1;
  }

  set catgorieLocal(value: CategorieLocal) {
    this._catgorieLocal1 = value;
  }

  get localeService(): LocalService {
    return this._localeService;
  }

  set localeService(value: LocalService) {
    this._localeService = value;
  }

  get rue(): Rue {
    return this._rue1;
  }

  set rue(value: Rue) {
    this._rue1 = value;
  }
}
