import {Component, OnInit} from '@angular/core';
import {RedevableService} from "../../controller/service/redevable.service";
import {OrderDetailsService} from "../../service/order-details.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:OrderDetailsService) {
    let js: HTMLScriptElement = document.createElement("script");
    js.src='assets/js/main.js';
    document.body.appendChild(js);
  }
  ngOnInit(): void {
    console.log(history.state.exemple);
  }

}
