import {Component, OnInit} from '@angular/core';
import {TauxtaxetrimestrielService} from "../../../controller/service/tauxtaxetrimestriel.service";
import {TauxTaxeTrimestriel} from "../../../controller/model/taux-taxe-trimestriel.model";

@Component({
  selector: 'app-taux-taxe-trimestriel-create',
  templateUrl: './taux-taxe-trimestriel-create.component.html',
  styleUrls: ['./taux-taxe-trimestriel-create.component.css']
})
export class TauxTaxeTrimestrielCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save(): void{
    this.tauxtaxetrimestrielService.save(this.tauxTaxeTrimestriel).subscribe(
      data => {
        if (data == null) {
          alert('failure : ref exist')
        }else{
          //this.tauxtaxetrimestriel = null;
          alert('success : tauxtaxetrimestriel save')
        }
      }
    );
  }

  constructor(private tauxtaxetrimestrielService:TauxtaxetrimestrielService) {
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
