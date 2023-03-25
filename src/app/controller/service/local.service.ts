import { Injectable } from '@angular/core';
import {Local} from "../model/local.model";
import {HttpClient} from "@angular/common/http";
import {CategorieLocal} from "../model/categorie-local.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private _local={} as Local;
  private _locals=[] as Array<Local>;

  constructor(private http:HttpClient) { }
  public save(): void {
    this.http.post<Local>(environment.url+'local/', this.local).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<Local>>(environment.url+'local/').subscribe(
      data => {
        this._locals = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get local(): Local{
  if (this._local == null) {
  this._local == new Local();
}
    return this._local;
  }

  set local(value: Local) {
    this._local = value;
  }

  get locals(): Array<Local> {
    return this._locals;
  }

  set locals(value: Array<Local>) {
    this._locals = value;
  }
}
