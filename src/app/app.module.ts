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
import {TauxTaxeAnuelleCreateComponent} from "./view/taux-taxe-anuelle/taux-taxe-anuelle-create/taux-taxe-anuelle-create.component";
import {TauxTaxeAnuelleListComponent} from "./view/taux-taxe-anuelle/taux-taxe-anuelle-list/taux-taxe-anuelle-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {HttpClientModule} from "@angular/common/http";
import {TaxeTrimestrielCeateComponent} from "./view/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component";
import {LocalListComponent} from "./view/local/local-list/local-list.component";
import {
  NotificationLocalCreateComponent
} from "./view/notification-local/notification-local-create/notification-local-create.component";
import { NotificationLocalListComponent } from './view/notification-local/notification-local-list/notification-local-list.component';
import {CategoriesCreateComponent} from "./view/categorie/categorie-create/categories-create.component";
import {
  TauxTaxeTrimestrielCreateComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-create/taux-taxe-trimestriel-create.component";
import {RedevableEditComponent} from "./view/redevable/redevable-edit/redevable-edit.component";

const appRoutes: Routes = [
  {path:indexLink,component:IndexComponent},
  {path:homeLink,component:HomeComponent},
  {path:'redevable-create',component:RedevableCreateComponent},
  {path:'redevable-list',component:RedevableListComponent},
  {path:'rue-create',component:RueCreateComponent},
  {path:'taxe-anuelle-creat',component:TaxeAnuelleCreateComponent},
  {path:'local-list',component:LocalListComponent},
  {path:'notification-local-list',component:NotificationLocalListComponent}
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
    TauxTaxeAnuelleCreateComponent,
    TauxTaxeAnuelleListComponent,
    TaxeAnuelleCreateComponent,
    TaxeTrimestrielCeateComponent,
    RedevableListComponent,
    NotificationLocalCreateComponent,
    NotificationLocalListComponent,
    CategoriesCreateComponent,
    TauxTaxeTrimestrielCreateComponent,
    RedevableEditComponent
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
