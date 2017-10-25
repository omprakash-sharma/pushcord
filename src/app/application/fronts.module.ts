import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main/main.component";
import {Route, RouterModule, Routes} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NgxCarouselModule } from 'ngx-carousel';
import {CustomMaterialModule} from "../shared/custom-material.module";
import {AdsSliderComponent} from "../shared/ads-slider/ads-slider.component";
import {RunningTransactionsComponent} from "../shared/running-transactions/running-transactions.component";
import {FrontsSearchComponent} from "./fronts-search/fronts-search.component";
import {FrontDetailsComponent} from "./front-details/front-details.component";
import {FeedCardComponent} from "../shared/feed-card/feed-card.component";
import {ConnectDialogComponent} from "./front-details/connect-dialog/connect-dialog.component";
import {FrontActivityComponent} from "./front-details/front-activity/front-activity.component";
import {FrontStoreComponent} from "./front-details/front-store/front-store.component";
import {AboutFrontComponent} from "./front-details/about-front/about-front.component";
import {FrontTransactionsComponent} from "./front-details/front-transactions/front-transactions.component";

import { CarouselComponent } from '../shared/carousel/carousel.component';

const routes: Route[] = [
  {
    path: "main",
    component: MainComponent,
    children: [
      {
        path: "fronts",
        children: [
          {
            path: "",
            component: FrontsSearchComponent
          },
          {
            path: ":id",
            component: FrontDetailsComponent,
            children: [
              {
                path: "",
                redirectTo: "activity",
                pathMatch: "full"
              },
              {
                path: "activity",
                component: FrontActivityComponent
              },
              {
                path: "store",
                component: FrontStoreComponent
              },
              {
                path: "about-us",
                component: AboutFrontComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCarouselModule
  ],
  declarations: [MainComponent, NavBarComponent, AdsSliderComponent, RunningTransactionsComponent
    , FrontsSearchComponent, FrontDetailsComponent, FeedCardComponent, ConnectDialogComponent, FrontActivityComponent, FrontStoreComponent, AboutFrontComponent, FrontTransactionsComponent,
    CarouselComponent],
  entryComponents: [
    ConnectDialogComponent
  ]
})
export class FrontsModule {
}
