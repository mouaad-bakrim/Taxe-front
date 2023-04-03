import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {HomeComponent} from "./view/home/home.component";
import {IndexComponent} from "./view/index/index.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {LocaleCreateComponent} from "./view/locale/locale-create/locale-create.component";
import {
  TauxTaxeAnuelleCreateComponent
} from "./view/taux-taxe-anuelle/taux-taxe-anuelle-create/taux-taxe-anuelle-create.component";

import {
  TaxeTrimestrielCeateComponent
} from "./view/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component";

import {
  TauxTaxeTrimestrielCreateComponent
} from "./view/taux-taxe-trimestriel/taux-taxe-trimestriel-create/taux-taxe-trimestriel-create.component";
import {LocaleListComponent} from "./view/locale/locale-list/locale-list.component";
import {
  NotificationLocaleCreateComponent
} from "./view/NotificationLocale/notification-locale-create/notification-locale-create.component";

export let indexLink = 'index';
export let taxeLink = 'taxe';
export let homeLink = '';
export let redevableLink = 'redevable';

const routes: Routes = [
  {path: indexLink, component: IndexComponent},
  {path: homeLink, component: HomeComponent},
  {path: redevableLink, component: RedevableCreateComponent},
  {path: 'redevable-list', component: RedevableListComponent},
  {path: 'rue-create', component: RueCreateComponent},
  {path: 'taux-taxe-anuelle-create', component: TauxTaxeAnuelleCreateComponent},
  {path: 'taux-taxe-anuelle-list', component: TauxTaxeAnuelleCreateComponent},
  {path: 'taxe-anuelle-creat', component: TaxeAnuelleCreateComponent},
  {path: 'taxe-trimestriel-ceate', component: TaxeTrimestrielCeateComponent},
  {path: 'taux-taxe-trimestriel-create', component: TauxTaxeTrimestrielCreateComponent},
  {path: taxeLink, component: TaxeTrimestrielCeateComponent},
  {path: 'locale-create', component: LocaleCreateComponent},
  {path: 'locale-list', component: LocaleListComponent},
  {path: 'notification-locale-create', component: NotificationLocaleCreateComponent},
  {path: 'taux-taxe-trimestriel-create', component: TauxTaxeTrimestrielCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
