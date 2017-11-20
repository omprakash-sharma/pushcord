import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {Route, RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Route[] = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardComponent]
})

export class ProfileModule {
}
