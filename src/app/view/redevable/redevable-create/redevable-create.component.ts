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




  constructor( private redevableService : RedevableService) { }
  ngOnInit():void {
    this.save();

  }


  public save(): void {
    this.redevableService.save()
  }
  get redevable(): Redevable {
    return this.redevableService.redevable;
  }

  set redevable(value: Redevable) {
    this.redevableService.redevable =value;
  }

  get redevables(): Array<Redevable> {
    return this.redevableService.redevables;
  }

  set redevables(value: Array<Redevable>) {
    this.redevableService.redevables=value;
  }

}
