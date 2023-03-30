import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../../controller/service/local.service";
import {Local} from "../../../controller/model/local.model";


@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit{

  constructor(private localeService: LocalService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public save(): void {
    this.localeService.save();
  }

  public findAll():void {
    this.localeService.findAll().subscribe(data => {
      this.locals= data;
      console.log(this.locals);

    });
  }

  get local(): Local {
    return this.localeService._local;
  }

  set local(value: Local) {
    this.localeService._local = value;
  }

  get locals(): Local[] {
    return this.localeService._locals;
  }

  set locals(value: Local[]) {
    this.localeService._locals = value;
  }

}
