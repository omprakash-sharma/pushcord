import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {Route, RouterModule} from "@angular/router";

import {HomeComponent} from "./home.component";
import {CustomMaterialModule} from "./custom-material.module";

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CustomMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
