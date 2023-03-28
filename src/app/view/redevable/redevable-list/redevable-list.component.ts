import {Component, OnInit} from '@angular/core';
import {RedevableService} from "../../../controller/service/redevable.service";
import {Redevable} from "../../../controller/model/redevable.model";

@Component({
  selector: 'app-redevable-list',
  templateUrl: './redevable-list.component.html',
  styleUrls: ['./redevable-list.component.css']
})
export class RedevableListComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {
  }



}
