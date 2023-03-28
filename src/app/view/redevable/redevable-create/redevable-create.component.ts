import {Component, OnInit} from '@angular/core';
import {RedevableService} from "src/app/controller/service/redevable.service";
import {Redevable} from "src/app/controller/model/redevable.model";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-redevable-create',
  templateUrl: './redevable-create.component.html',
  styleUrls: ['./redevable-create.component.css']
})
export class RedevableCreateComponent implements OnInit{




  constructor( private _redevableService : RedevableService) { }
  ngOnInit():void {
    this._redevableService.findAll();
  }
  public findAll():void{
    this._redevableService.findAll();
  }

  public save(): void {
    this._redevableService.save()
  }
  get redevable(): Redevable {
    return this._redevableService.redevable;
  }

  set redevable(value: Redevable) {
    this._redevableService.redevable =value;
  }

  get redevables(): Array<Redevable> {
    return this._redevableService.redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevableService.redevables=value;
  }

}
