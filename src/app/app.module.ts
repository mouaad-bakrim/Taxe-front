import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {CategoriesCreateComponent} from "./view/categorie/categorie-create/categories-create.component";
import {CategorieListComponent} from "./view/categorie/categorie-list/categorie-list.component";
import {LocalCreateComponent} from "./view/local/local-create/local-create.component";
import {LocalListComponent} from "./view/local/local-list/local-list.component";
import {
  NotificationLocalCreateComponent
} from "./view/notification-local/notification-local-create/notification-local-create.component";
import {QuartierCreateComponent} from "./view/quartier/quartier-create/quartier-create.component";
import {QuartierListComponent} from "./view/quartier/quartier-list/quartier-list.component";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {RueListComponent} from "./view/rue/rue-list/rue-list.component";
import {SecteurCeateComponent} from "./view/secteur/secteur-ceate/secteur-ceate.component";
import {SecteurListComponent} from "./view/secteur/secteur-list/secteur-list.component";
import {
  TauxTaxeTrimestrielCreateComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-create/taux-taxe-trimestriel-create.component";
import {
  TauxTaxeTrimestrielListComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-list/taux-taxe-trimestriel-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {TaxeAnuelleListComponent} from "./view/taxe-anuelle/taxe-anuelle-list/taxe-anuelle-list.component";
import {
  TaxeTrimestrielCeateComponent
} from "./view/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component";
import {
  TaxeTrimestrielListComponent
} from "./view/taxe-trimestriel/taxe-trimestriel-list/taxe-trimestriel-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RedevableCreateComponent,
    CategoriesCreateComponent,
    CategorieListComponent,
    LocalCreateComponent,
    LocalListComponent,
    NotificationLocalCreateComponent,
    QuartierCreateComponent,
    QuartierListComponent,
    RedevableListComponent,
    RueCreateComponent,
    RueListComponent,
    SecteurCeateComponent,
    SecteurListComponent,
    TauxTaxeTrimestrielCreateComponent,
    TauxTaxeTrimestrielListComponent,
    TaxeAnuelleCreateComponent,
    TaxeAnuelleListComponent,
    TaxeTrimestrielCeateComponent,
    TaxeTrimestrielListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
