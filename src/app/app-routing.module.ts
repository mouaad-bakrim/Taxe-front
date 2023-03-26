import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {HomeComponent} from "./view/home/home.component";
import {IndexComponent} from "./view/index/index.component";
import {RedevableCreateComponent} from "./view/redevable/redevable-create/redevable-create.component";
import {RedevableListComponent} from "./view/redevable/redevable-list/redevable-list.component";
import {TaxeAnuelleCreateComponent} from "./view/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component";
import {LocalCreateComponent} from "./view/local/local-create/local-create.component";

export let indexLink='index';
export let redevableLink='';
export let homeLink='home';

const routes: Routes = [
  {path:indexLink,component:IndexComponent},
  {path:homeLink,component:HomeComponent},
  {path:redevableLink,component:RedevableCreateComponent},
  {path:'redevable-list',component:RedevableListComponent},
  {path:'rue-create',component:RueCreateComponent},
  {path:'taxe-anuelle-creat',component:TaxeAnuelleCreateComponent},
  {path:'local-create',component:LocalCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
