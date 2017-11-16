import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {Route, RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared.module";
import {FrontsModule} from "./fronts/fronts.module";
import {HomeModule} from "./home/home.module";
import {StoreModule} from "./store/store.module";
import {NoComponentFoundComponent} from "../shared/components/no-component-found/no-component-found.component";
import {NavBarComponent} from "../shared/components/nav-bar/nav-bar.component";
import {RunningTransactionsComponent} from "../shared/components/running-transactions/running-transactions.component";
import {AdsSliderComponent} from "../shared/components/ads-slider/ads-slider.component";
import {NgxCarouselModule} from "ngx-carousel";
import {NgDropDownModule} from "../shared/directives/ng-drop-down/ng-drop-down.module";
import {CustomMaterialModule} from "./custom-material.module";
import {ProfileModule} from "./profile/profile.module";
import {DataSharingService} from '../main/store/services/data-sharing.service'

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
        path: "profile",
        loadChildren: "app/main/profile/profile.module#ProfileModule"
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
    HomeModule,
    ProfileModule,
    NgxCarouselModule,
    NgDropDownModule,
    CustomMaterialModule
  ],
  declarations: [
    MainComponent,
    NavBarComponent,
    AdsSliderComponent,
    RunningTransactionsComponent,
    NoComponentFoundComponent
  ],
  exports: [RouterModule],
  providers:[DataSharingService]
})

export class MainModule {
}
