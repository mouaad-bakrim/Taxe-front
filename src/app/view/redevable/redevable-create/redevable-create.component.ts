import {Component, OnInit} from '@angular/core';
import {RedevableService} from "src/app/controller/service/redevable.service";
import {Redevable} from "src/app/controller/model/redevable.model";


@Component({
  selector: 'app-redevable-create',
  templateUrl: './redevable-create.component.html',
  styleUrls: ['./redevable-create.component.css']
})
export class RedevableCreateComponent implements OnInit{
  constructor() {
  }


  ngOnInit(): void {
  }

}
