import {Component, OnInit} from '@angular/core';
import {OrderDetailsService} from "../../service/order-details.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }
}
