import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FrontComponent} from "./front/front.component";
import {Route, RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {CustomMaterialModule} from "../shared/custom-material.module";
import {FrontsSearchComponent} from "./fronts-search/fronts-search.component";
import {FrontDetailsComponent} from "./front-details/front-details.component";
import {FeedCardComponent} from "../shared/feed-card/feed-card.component";
import {ConnectDialogComponent} from "./front-details/connect-dialog/connect-dialog.component";
import {FrontActivityComponent} from "./front-details/front-activity/front-activity.component";
import {FrontStoreComponent} from "./front-details/front-store/front-store.component";
import {AboutFrontComponent} from "./front-details/about-front/about-front.component";
import {FrontTransactionsComponent} from "./front-details/front-transactions/front-transactions.component";
import {FrontStoreSearchComponent} from "./front-details/front-store/front-store-search/front-store-search.component";
import {FrontProductDetailsComponent} from "./front-details/front-store/front-product-details/front-product-details.component";
import {CommunicationModule} from "../communication/communication.module";
import {SharedModule} from "../shared/shared.module";
import {FrontContactPointsComponent} from "./front-details/front-contact-points/front-contact-points.component";

const routes: Route[] = [
  {
    path: "main",
    component: FrontComponent,
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
                component: FrontStoreComponent,
                children: [
                  {
                    path: "",
                    component: FrontStoreSearchComponent
                  },
                  {
                    path: ":id",
                    component: FrontProductDetailsComponent
                  }
                ]
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
    CommunicationModule,
    SharedModule
  ],
  declarations: [FrontComponent
    , FrontsSearchComponent, FrontDetailsComponent, FeedCardComponent, ConnectDialogComponent, FrontActivityComponent
    , FrontStoreComponent, AboutFrontComponent, FrontTransactionsComponent, FrontStoreSearchComponent, FrontProductDetailsComponent, FrontContactPointsComponent],
  entryComponents: [
    ConnectDialogComponent
  ]
})
export class FrontsModule {
}
