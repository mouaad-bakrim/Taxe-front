import {Injectable} from '@angular/core';
import {Quartier} from "../model/quartier.model";
import {HttpClient} from "@angular/common/http";
import {Redevable} from "../model/redevable.model";
import {environment} from "../../environments/environment";
import {NotificationLocal} from "../model/notification-local.model";

@Injectable({
  providedIn: 'root'
})
export class QuartierService {
  public _quartier = {} as Quartier;
  public _quartiers = [] as Array<Quartier>;

  constructor(private http: HttpClient) {
  }

  public save(): void {
    this.http.post<Quartier>(environment.url + 'quartier/', this.quartier).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public findAll(): void {
    this.http.get<Array<Quartier>>(environment.url + 'quartier/').subscribe(
      data => {
        this._quartiers = data;
      }, error => {
        alert('Error');
      }
    );
  }

  get quartier(): Quartier {
    if (this._quartier == null) {
      this._quartier == new Quartier();
    }
    return this._quartier;
  }

  set quartier(value: Quartier) {
    this._quartier = value;
  }

  get quartiers(): Array<Quartier> {
    return this._quartiers;
  }

  set quartiers(value: Array<Quartier>) {
    this._quartiers = value;
  }
}
