import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { IndexComponent } from './view/index/index.component';
import {NavbarComponent} from "./shaer/navbar/navbar.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule, homeLink, indexLink} from "./app-routing.module";
import {LocalCreateComponent} from "./view/local/local-create/local-create.component";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  {path:indexLink,component:IndexComponent},
  {path:homeLink,component:HomeComponent},
  {path:'redevable-create',component:RedevableCreateComponent},
  {path:'redevable-list',component:RedevableListComponent},
  {path:'rue-create',component:RueCreateComponent},
  {path:'taxe-anuelle-creat',component:TaxeAnuelleCreateComponent},
  {path:'local-create',component:LocalCreateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    RueCreateComponent,
    RedevableCreateComponent,
    LocalCreateComponent,
    TaxeAnuelleCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
