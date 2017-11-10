import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared.module";
import {FrontsModule} from "./fronts/fronts.module";
import {HomeModule} from "./home/home.module";
import {StoreModule} from "./store/store.module";
import {NoComponentFoundComponent} from "../shared/components/no-component-found/no-component-found.component";

const routes: Route[] = [
  {
    path: "main",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "app/main/home/home.module#HomeModule"
      },
      {
        path: "fronts",
        loadChildren: "app/main/fronts/fronts.module#FrontsModule"
      },
      {
        path: "store",
        loadChildren: "app/main/store/store.module#StoreModule"
      },
      {
        path: "**",
        component: NoComponentFoundComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/main",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FrontsModule,
    StoreModule,
    HomeModule
  ],
  declarations: [MainComponent],
  exports: [RouterModule]
})

export class MainModule {
}
