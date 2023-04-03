import {Component, OnInit} from "@angular/core";
import {TauxtaxeanuelleService} from "../../../controller/service/tauxtaxeanuelle.service";
import {TauxTaxeAnuelle} from "../../../controller/model/taux-taxe-anuelle.model";


@Component({
  selector: 'app-taux-taxe-anuelle-create',
  templateUrl: './taux-taxe-anuelle-create.component.html',
  styleUrls: ['./taux-taxe-anuelle-create.component.css']

})
export class TauxTaxeAnuelleCreateComponent implements OnInit {
  ngOnInit(): void {
  }


  public save(): void {
    this.tauxtaxeanuelleService.save().subscribe(
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


  constructor(private tauxtaxeanuelleService: TauxtaxeanuelleService) {
  }


  get tauxTaxeAnuelle(): TauxTaxeAnuelle {
    return this.tauxtaxeanuelleService.tauxTaxeAnuelle;
    ;
  }

  set tauxTaxeAnuelle(value: TauxTaxeAnuelle) {
    this.tauxtaxeanuelleService.tauxTaxeAnuelle = value;
  }

  get tauxTaxeAnuelles(): Array<TauxTaxeAnuelle> {
    return this.tauxtaxeanuelleService.tauxTaxeAnuelles;
  }

  set tauxTaxeAnuelles(value: Array<TauxTaxeAnuelle>) {
    this.tauxtaxeanuelleService.tauxTaxeAnuelles = value;
  }

}



