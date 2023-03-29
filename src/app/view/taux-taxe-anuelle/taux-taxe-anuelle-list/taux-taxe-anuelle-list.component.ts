import {Component, OnInit} from "@angular/core";
import {TauxtaxeanuelleService} from "../../../controller/service/tauxtaxeanuelle.service";
import {TauxTaxeAnuelle} from "../../../controller/model/taux-taxe-anuelle.model";
import {Redevable} from "../../../controller/model/redevable.model";
import {environment} from "../../../environments/environment";
import {TauxTaxeTrimestriel} from "../../../controller/model/taux-taxe-trimestriel.model";
import {Observable} from "rxjs";



@Component({
  selector: 'app-taux-taxe-anuelle-list',
  templateUrl: './taux-taxe-anuelle-list.component.html',
  styleUrls: ['./taux-taxe-anuelle-list.component.css']
})

export class TauxTaxeAnuelleListComponent implements OnInit{

  edit =false;
  ngOnInit(): void {
    this.findAll();}


  public findAll():void{
    this.tauxtaxeanuelleService.findAll().subscribe(
      data => this.tauxTaxeAnuelles = data
    );
  }


  constructor(private tauxtaxeanuelleService:TauxtaxeanuelleService) {}

  get tauxTaxeAnuelle(): TauxTaxeAnuelle {
    return this.tauxtaxeanuelleService.tauxTaxeAnuelle;
  }

  set TauxTaxeAnuelle(value: TauxTaxeAnuelle) {
    this.tauxtaxeanuelleService.tauxTaxeAnuelle = value;
  }

  get tauxTaxeAnuelles(): Array<TauxTaxeAnuelle> {
    return this.tauxtaxeanuelleService.tauxTaxeAnuelles;
  }

  set tauxTaxeAnuelles(value: Array<TauxTaxeAnuelle>) {
    this.tauxtaxeanuelleService.tauxTaxeAnuelles = value;
  }







  }






