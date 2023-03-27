import { Injectable } from '@angular/core';
import {Redevable} from "../model/redevable.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RedevableService {
  private _redevable={} as Redevable;
  private _redevables=[] as Array<Redevable>;

  constructor(private http:HttpClient) { }
  public save(): void {
    this.http.post<Redevable>(environment.url+'redevable/', this.redevable).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<Redevable>>(environment.url+'redevable/').subscribe(
      data => {
        this._redevables = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get redevable(): Redevable {
    if (this._redevable == null) {
      this._redevable == new Redevable();
    }
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get redevables(): Array<Redevable> {
    return this._redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevables = value;
  }
  get redevablesList(): Array<Redevable> {
    if (this.redevablesList == null){
      this.redevablesList = new Array<Redevable>();
    }
    return this.redevablesList;
  }

  set redevablesList(value: Array<Redevable>) {
    this.redevablesList = value;
  }
}
