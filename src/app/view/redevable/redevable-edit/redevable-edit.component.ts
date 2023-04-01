import {Component, OnInit} from '@angular/core';
import {Redevable} from "../../../controller/model/redevable.model";
import {RedevableService} from "../../../controller/service/redevable.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-redevable-edit',
  templateUrl: './redevable-edit.component.html',
  styleUrls: ['./redevable-edit.component.css']
})
export class RedevableEditComponent implements OnInit{
  private id!:number;
  private _monredevable=new Redevable();
  ngOnInit(): void {
    this.id=parseInt(<string> this.route.snapshot.paramMap.get('id'));

  }


  constructor(private route: ActivatedRoute, private redevableService: RedevableService) {
  }


  public update(monredevable: Redevable): void {
    this.redevableService.update(monredevable)
      .subscribe(data => {
        if (data == null) {
          alert('failure : error exist')
        } else {
          this.redevables.push({...this.redevable});
          this.redevableService.redevable = new Redevable();
          alert('success :  saved')
        }
      })
  }



  get monredevable(): Redevable {
    return this._monredevable;
  }

  set monredevable(value: Redevable) {
    this._monredevable = value;
  }

  get redevable(): Redevable {
    return this.redevableService.redevable;
  }

  set redevable(value: Redevable) {
    this.redevableService.redevable = value;
  }

  get redevables(): Array<Redevable> {
    return this.redevableService.redevables;
  }

  set redevables(value: Array<Redevable>) {
    this.redevableService.redevables = value;
  }


}

