import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { IndexComponent } from './view/index/index.component';
import {NavbarComponent} from "./shaer/navbar/navbar.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    RueCreateComponent,
    RedevableCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
