import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { IndexComponent } from './view/index/index.component';
import {NavbarComponent} from "./shaer/navbar/navbar.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule, homeLink, indexLink} from "./app-routing.module";
import {LocalCreateComponent} from "./view/local/local-create/local-create.component";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {HttpClientModule} from "@angular/common/http";
import {TaxeTrimestrielCeateComponent} from "./view/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component";
import {LocalListComponent} from "./view/local/local-list/local-list.component";
import {
  TauxTaxeTrimestriellistComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-list/taux-taxe-trimestriel-list.component";
import {
  TauxTaxeTrimestrielCreateComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-create/taux-taxe-trimestriel-create.component";

const appRoutes: Routes = [
  {path:indexLink,component:IndexComponent},
  {path:homeLink,component:HomeComponent},
  {path:'redevable-create',component:RedevableCreateComponent},
  {path:'redevable-list',component:RedevableListComponent},
  {path:'rue-create',component:RueCreateComponent},
  {path:'taxe-anuelle-creat',component:TaxeAnuelleCreateComponent},
  {path:'local-list',component:LocalListComponent}
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
    LocalListComponent,
    TaxeAnuelleCreateComponent,
    TaxeTrimestrielCeateComponent,
    RedevableListComponent,
    TauxTaxeTrimestriellistComponent,
    TauxTaxeTrimestrielCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
