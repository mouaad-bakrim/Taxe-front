import { Injectable } from '@angular/core';
import {Rue} from "../model/rue.model";
import {HttpClient} from "@angular/common/http";
import {Redevable} from "../model/redevable.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RueService {
  private _rue={} as Rue;
  private _rues=[] as Array<Rue>;

  constructor(private http: HttpClient) { }
  public save(): void {
    this.http.post<Rue>(environment.url+'rue/', this.rue).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }
  public findAll(): void {
    this.http.get<Array<Rue>>(environment.url+'rue/').subscribe(
      data => {
        this._rues = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get rue(): Rue {

    if (this._rue == null) {
      this._rue == new Rue();
    }
    return this._rue;
  }

  set rue(value: Rue) {
    this._rue = value;
  }

  get rues(): Array<Rue> {
    return this._rues;
  }

  set rues(value: Array<Rue>) {
    this._rues = value;
  }
}
