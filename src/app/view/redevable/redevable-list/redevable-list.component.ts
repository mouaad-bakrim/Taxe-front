import {Component, OnInit} from '@angular/core';
import {RedevableService} from "../../../controller/service/redevable.service";
import {Redevable} from "../../../controller/model/redevable.model";

@Component({
  selector: 'app-redevable-list',
  templateUrl: './redevable-list.component.html',
  styleUrls: ['./redevable-list.component.css']
})
export class RedevableListComponent implements OnInit{
  constructor(private redevableService: RedevableService) {
  }
  ngOnInit(): void {
    this.redevableService.findAll();
  }

  get redevablesList(): Array<Redevable>{
    return this.redevableService.redevablesList;
  }




}
