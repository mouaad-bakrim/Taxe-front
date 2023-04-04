import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './view/home/home.component';
import {IndexComponent} from './view/index/index.component';
import {NavbarComponent} from "./shaer/navbar/navbar.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule, homeLink, indexLink} from "./app-routing.module";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {
  TauxTaxeAnuelleCreateComponent
} from "./view/taux-taxe-anuelle/taux-taxe-anuelle-create/taux-taxe-anuelle-create.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {HttpClientModule} from "@angular/common/http";
import {
  TaxeTrimestrielCeateComponent
} from "./view/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component";
import {CategoriesCreateComponent} from "./view/categorie/categorie-create/categories-create.component";
import {
  TauxTaxeTrimestrielCreateComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-create/taux-taxe-trimestriel-create.component";
import {RedevableEditComponent} from "./view/redevable/redevable-edit/redevable-edit.component";
import {
  TauxTaxeTrimestriellistComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-list/taux-taxe-trimestriel-list.component";
import {LocaleListComponent} from "./view/locale/locale-list/locale-list.component";
import {
  NotificationLocaleListComponent
} from "./view/NotificationLocale/notification-locale-list/notification-locale-list.component";
import {
  NotificationLocaleCreateComponent
} from "./view/NotificationLocale/notification-locale-create/notification-locale-create.component";
import {LocaleCreateComponent} from "./view/locale/locale-create/locale-create.component";
import {TaxeAnuelleListComponent} from "./view/taxe-anuelle/taxe-anuelle-list/taxe-anuelle-list.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";

const appRoutes: Routes = [
  {path: indexLink, component: IndexComponent},
  {path: homeLink, component: HomeComponent},
  {path: 'redevable-create', component: RedevableCreateComponent},
  {path: 'redevable-list', component: RedevableListComponent},
  {path: 'rue-create', component: RueCreateComponent},
  {path: 'taxe-anuelle-creat', component: TaxeAnuelleCreateComponent},
  {path: 'locale-list', component: LocaleListComponent},
  {path: 'notification-locale-list', component: NotificationLocaleListComponent},
  {path: 'taux-taxe-trimestriel-create', component: TauxTaxeTrimestrielCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    NavbarComponent,
    RueCreateComponent,
    RedevableCreateComponent,
    LocaleCreateComponent,
    LocaleListComponent,
    TauxTaxeAnuelleCreateComponent,
    TauxTaxeAnuelleListComponent,
    TaxeAnuelleCreateComponent,
    TaxeAnuelleListComponent,
    TaxeTrimestrielCeateComponent,
    RedevableListComponent,
    NotificationLocaleCreateComponent,
    NotificationLocaleListComponent,
    CategoriesCreateComponent,
    TauxTaxeTrimestrielCreateComponent,
    RedevableEditComponent,
    TauxTaxeTrimestriellistComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
