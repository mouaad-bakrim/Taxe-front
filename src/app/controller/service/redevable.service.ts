import {Injectable} from '@angular/core';
import {Redevable} from "../model/redevable.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RedevableService {


  public _redevable = {} as Redevable;
  public _redevables = [] as Array<Redevable>;


  public save(): void {
    this.http.post<Redevable>(environment.url + 'redevable/', this.redevable).subscribe(data => {
      if (data != null) {
        alert('save VHCC');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public deleteByCin(cin: string): Observable<number> {
    return this.http.delete<number>(environment.url + 'redevable/cin/' + cin);
  }

  public findAll(): void {
    this.http.get<Array<Redevable>>(environment.url + 'redevable/').subscribe(data => {
        this.redevables = data;
      }, error => {
        alert('Error');
      }
    );
  }


  constructor(private http: HttpClient) {

  }

  get redevable(): Redevable {
    if (this._redevable == null) {
      this._redevable == new Redevable();
    }
    return <Redevable>this._redevable;
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
}
