import {Component, OnInit} from '@angular/core';
import {RedevableService} from "src/app/controller/service/redevable.service";
import {Redevable} from "src/app/controller/model/redevable.model";
import {OrderDetailsService} from "../../../service/order-details.service";


@Component({
  selector: 'app-redevable-create',
  templateUrl: './redevable-create.component.html',
  styleUrls: ['./redevable-create.component.css']
})
export class RedevableCreateComponent implements OnInit{
  employeeRecords: any;

  constructor(private _redevabelservice:RedevableService ,private service:OrderDetailsService) {
    let js: HTMLScriptElement = document.createElement("script");
    js.src='assets/js/scripte.js';
    document.body.appendChild(js);
  }
  ngOnInit(): void {
    console.log(history.state.exemple);
  }

  public save(): void {
    this._redevabelservice.save();
  }


  get redevable(): Redevable {

    return this._redevabelservice.redevable;
  }

  set redevable(value: Redevable) {
    this._redevabelservice.redevable = value;
  }

  get redevables(): Array<Redevable> {
    return this._redevabelservice.redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevabelservice.redevables = value;
  }



}
