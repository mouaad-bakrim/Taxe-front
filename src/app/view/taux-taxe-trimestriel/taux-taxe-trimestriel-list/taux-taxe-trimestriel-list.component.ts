import {Component, OnInit} from '@angular/core';
import {TauxTaxeTrimestriel} from "../../../controller/model/taux-taxe-trimestriel.model";
import {TauxtaxetrimestrielService} from "../../../controller/service/tauxtaxetrimestriel.service";

@Component({
  selector: 'app-taux-taxe-trimestriel-list',
  templateUrl: './taux-taxe-trimestriel-list.component.html',
  styleUrls: ['./taux-taxe-trimestriel-list.component.css']
})
export class TauxTaxeTrimestriellistComponent implements OnInit {
  edit = true

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.tauxTaxeTrimestrielService.findAll().subscribe(
      data => this.tauxTaxeTrimestriels = data
    );
  }

  constructor(private tauxTaxeTrimestrielService: TauxtaxetrimestrielService) {
  }

  get tauxTaxeTrimestriel(): TauxTaxeTrimestriel {
    return this.tauxTaxeTrimestrielService.tauxTaxeTrimestriel;
  }

  set tauxTaxeTrimestriel(value: TauxTaxeTrimestriel) {
    this.tauxTaxeTrimestrielService.tauxTaxeTrimestriel = value;
  }

  get tauxTaxeTrimestriels(): Array<TauxTaxeTrimestriel> {
    return this.tauxTaxeTrimestrielService.tauxTaxeTrimestriels;
  }

  set tauxTaxeTrimestriels(value: Array<TauxTaxeTrimestriel>) {
    this.tauxTaxeTrimestrielService.tauxTaxeTrimestriels = value;
  }


}

