import {NgModule} from "@angular/core";

import {FrontsSearchComponent} from "./fronts-search/fronts-search.component";
import {FrontDetailsComponent} from "./front-details/front-details.component";
import {FeedCardComponent} from "../../shared/components/feed-card/feed-card.component";
import {ConnectDialogComponent} from "./front-details/connect-dialog/connect-dialog.component";
import {FrontActivityComponent} from "./front-details/front-activity/front-activity.component";
import {AboutFrontComponent} from "./front-details/about-front/about-front.component";
import {FrontTransactionsComponent} from "./front-details/front-transactions/front-transactions.component";
import {FrontStoreSearchComponent} from "./front-details/front-store/front-store-search/front-store-search.component";
import {FrontProductDetailsComponent} from "./front-details/front-store/front-product-details/front-product-details.component";
import {FrontContactPointsComponent} from "./front-details/front-contact-points/front-contact-points.component";
import {Route, RouterModule} from "@angular/router";
import {CommunicationModule} from "../communication/communication.module";
import {SharedModule} from "../../shared/shared.module";

const routes: Route[] = [
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
        path: "fs_store",
        component: FrontStoreSearchComponent
      },
      {
        path: "fs_store/:id",
        component: FrontProductDetailsComponent
      },
      {
        path: "about-us",
        component: AboutFrontComponent
      },
      {
        path: "transactions",
        component: FrontTransactionsComponent
      },
      {
        path: "contact-points",
        component: FrontContactPointsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommunicationModule,
  ],
  declarations: [FrontsSearchComponent, FrontDetailsComponent, FeedCardComponent, ConnectDialogComponent, FrontActivityComponent
    , AboutFrontComponent, FrontTransactionsComponent, FrontStoreSearchComponent,
    FrontProductDetailsComponent, FrontContactPointsComponent],
  entryComponents: [
    ConnectDialogComponent
  ]
})
export class FrontsModule {
}
