import {Component, OnInit} from '@angular/core';
import {OrderDetailsService} from "../../service/order-details.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private service:OrderDetailsService) {
    let js: HTMLScriptElement = document.createElement("script");
    js.src='assets/js/main.js';
    document.body.appendChild(js);
  }
  ngOnInit(): void {
    console.log(history.state.exemple);
  }
}
