import {Injectable} from '@angular/core';
import {Local} from "../model/local.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Redevable} from "../model/redevable.model";
import {NotificationLocal} from "../model/notification-local.model";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  public _local = {} as Local;
  public _locals = [] as Array<Local>;

  constructor(private http: HttpClient) {
  }

  public save(): void {
    this.http.post<Local>(environment.url + 'local/', this.local).subscribe(data => {
      console.log(this.local);
      console.log(data);
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public update(): void {
    this.http.post<Local>(environment.url + 'local/', this.local).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public findAll(): Observable<Array<Local>> {
    return this.http.get<Array<Local>>(environment.url+'local/');
  }


  get local(): Local {
    if (this._local == null) {
      this._local = new Local();
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
