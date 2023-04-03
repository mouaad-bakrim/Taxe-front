import {Injectable} from '@angular/core';
import {Secteur} from "../model/secteur.model";
import {HttpClient} from "@angular/common/http";
import {Redevable} from "../model/redevable.model";
import {environment} from "../../environments/environment";
import {Rue} from "../model/rue.model";

@Injectable({
  providedIn: 'root'
})
export class SecteurService {
  private _secteur = {} as Secteur;
  private _secteurs = [] as Array<Secteur>;

  constructor(private http: HttpClient) {
  }

  public save(): void {
    this.http.post<Secteur>(environment.url + 'secteur/', this.secteur).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  public findAll(): void {
    this.http.get<Array<Secteur>>(environment.url + 'secteur/').subscribe(
      data => {
        this._secteurs = data;
      }, error => {
        alert('Error');
      }
    );
  }


  get secteur(): Secteur {
    if (this._secteur == null) {
      this._secteur == new Secteur();
    }
    return this._secteur;
  }

  set secteur(value: Secteur) {
    this._secteur = value;
  }

  get secteurs(): Array<Secteur> {
    return this._secteurs;
  }

  set secteurs(value: Array<Secteur>) {
    this._secteurs = value;
  }
}
