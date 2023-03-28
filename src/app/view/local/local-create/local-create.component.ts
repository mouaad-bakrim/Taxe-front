import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../../controller/service/local.service";
import {Local} from "../../../controller/model/local.model";
import {Redevable} from "../../../controller/model/redevable.model";
import {CategorieLocal} from "../../../controller/model/categorie-local.model";
import {Rue} from "../../../controller/model/rue.model";

@Component({
  selector: 'app-local-create',
  templateUrl: './local-create.component.html',
  styleUrls: ['./local-create.component.css']
})
export class LocalCreateComponent implements OnInit{
   _redevable1 = new Redevable();
   _catgorie1= new CategorieLocal();
  _rue1= new Rue();

  constructor(private localeService: LocalService) { }

  ngOnInit(): void {

  }


  public save() :void{
    this.local.categorieLocal=this._catgorie1;
    this.local.rue=this._rue1;
    this.local.redevable=this._redevable1;
    this.localeService.save().subscribe(
      data=>{
        if(data ==null){
          alert('error')
        }else{
          alert('success')
        }
      }
    );
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
    return this._redevable1;
  }

  set redevable(value: Redevable) {
    this._redevable1 = value;
  }

  get catgorie(): CategorieLocal {
    return this._catgorie1;
  }

  set catgorie(value: CategorieLocal) {
    this._catgorie1 = value;
  }

  get rue(): Rue {
    return this._rue1;
  }

  set rue(value: Rue) {
    this._rue1 = value;
  }
}
