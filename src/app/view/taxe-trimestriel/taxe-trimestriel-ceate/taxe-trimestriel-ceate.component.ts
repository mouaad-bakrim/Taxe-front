import {Component, OnInit} from '@angular/core';
import {OrderDetailsService} from "../../../service/order-details.service";

@Component({
  selector: 'app-taxe-trimestriel-ceate',
  templateUrl: './taxe-trimestriel-ceate.component.html',
  styleUrls: ['./taxe-trimestriel-ceate.component.css']
})
export class TaxeTrimestrielCeateComponent implements OnInit{

  constructor(private service:OrderDetailsService) {
    let js: HTMLScriptElement = document.createElement("script");
    js.src='assets/js/mouad.js';
    document.body.appendChild(js);
  }
  ngOnInit(): void {
    console.log(history.state.exemple);
  }
}
