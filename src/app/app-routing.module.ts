import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {HomeComponent} from "./view/home/home.component";
import {IndexComponent} from "./view/index/index.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {LocalCreateComponent} from "./view/local/local-create/local-create.component";
import {
  TaxeTrimestrielCeateComponent
} from "./view/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component";
import {
  NotificationLocalCreateComponent
} from "./view/notification-local/notification-local-create/notification-local-create.component";
import {LocalListComponent} from "./view/local/local-list/local-list.component";

export let indexLink='index';
export let taxeLink='taxe';
export let homeLink='';
export let redevableLink='redevable';

const routes: Routes = [
  {path:indexLink,component:IndexComponent},
  {path:homeLink,component:HomeComponent},
  {path:redevableLink,component:RedevableCreateComponent},
  {path:'redevable-list',component:RedevableListComponent},
  {path:'rue-create',component:RueCreateComponent},
  {path:'taxe-anuelle-creat',component:TaxeAnuelleCreateComponent},
  {path:taxeLink,component:TaxeTrimestrielCeateComponent},
  {path:'local-create',component:LocalCreateComponent},
  {path:'local-list',component:LocalListComponent},
  {path:'notification-local-create',component:NotificationLocalCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
