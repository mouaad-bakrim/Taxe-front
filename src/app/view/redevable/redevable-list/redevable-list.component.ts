import {Component, OnInit} from '@angular/core';
import {RedevableService} from "../../../controller/service/redevable.service";
import {Redevable} from "../../../controller/model/redevable.model";

@Component({
  selector: 'app-redevable-list',
  templateUrl: './redevable-list.component.html',
  styleUrls: ['./redevable-list.component.css']
})
export class RedevableListComponent implements OnInit{
  constructor(public redevableService: RedevableService) {
  }

  public findAll(): void{
    this.redevableService.findAll();
  }

  public deleteByCin(redevable: Redevable, index: number): void {
    this.redevableService.deleteByCin(redevable.cin).subscribe(data => {
      if (data > 0) {
        this.redevables.splice(index, 1)
      } else {
        alert('DEL ERROR')
      }
    });
  }
  ngOnInit(): void {
    this.findAll();
  }
  get redevable(): Redevable {
    return this.redevableService._redevable;
  }

  set redevable(value: Redevable) {
    this.redevableService._redevable = value;
  }

  get redevables(): Redevable[] {
    return this.redevableService._redevables;
  }

  set redevables(value: Redevable[]) {
    this.redevableService._redevables = value;
  }

}

