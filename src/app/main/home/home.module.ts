import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {Route, RouterModule} from "@angular/router";

import { HomeComponent } from './home.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
