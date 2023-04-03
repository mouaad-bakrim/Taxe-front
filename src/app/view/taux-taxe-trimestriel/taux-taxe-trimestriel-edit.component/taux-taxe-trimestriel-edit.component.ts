import {Component, OnInit} from '@angular/core';
import {TauxtaxetrimestrielService} from "../../../controller/service/tauxtaxetrimestriel.service";
import {TauxTaxeTrimestriel} from "../../../controller/model/taux-taxe-trimestriel.model";

@Component({
  selector: 'app-taux-taxe-trimestriel-edit.component',
  templateUrl: './taux-taxe-trimestriel-edit.component.html',
  styleUrls: ['./taux-taxe-trimestriel-edit.component.css']
})
export class TauxTaxeTrimestrielEditComponent implements OnInit {
  ngOnInit(): void {
    this.findByDateApplicationFin(new Date())
  }

  public update(): void {
    this.tauxtaxetrimestrielService.update().subscribe(
      data => {
        if (data == null) {
          alert('failure : ref exist')
        } else {
          //this.tauxtaxetrimestriel = null;
          alert('success : tauxtaxetrimestriel save')
        }
      }
    );
  }

  public findByDateApplicationFin(dateApplicationFin: Date) {
    this.tauxtaxetrimestrielService.findByDateApplicationFin(dateApplicationFin).subscribe(
      data => this.tauxTaxeTrimestriel = data
    );
  }

  constructor(private tauxtaxetrimestrielService: TauxtaxetrimestrielService) {
  }

  get tauxTaxeTrimestriel(): TauxTaxeTrimestriel {
    return this.tauxtaxetrimestrielService.tauxTaxeTrimestriel;
  }

  set tauxTaxeTrimestriel(value: TauxTaxeTrimestriel) {
    this.tauxtaxetrimestrielService.tauxTaxeTrimestriel = value;
  }

  get tauxTaxeTrimestriels(): Array<TauxTaxeTrimestriel> {
    return this.tauxtaxetrimestrielService.tauxTaxeTrimestriels;
  }

  set tauxTaxeTrimestriels(value: Array<TauxTaxeTrimestriel>) {
    this.tauxtaxetrimestrielService.tauxTaxeTrimestriels = value;
  }

}
