import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Route} from "@angular/router";

// import {MainComponent} from "../main/main.component";
import { BaseStoreComponent } from './base-store.component';
import { DealsComponent } from './view-by-deals/deals.component';
import { FrontsComponent } from './view-by-fronts/fronts.component';
import { LinesComponent } from './view-by-lines/lines.component';
const route:Route[] = [
  {
    path:"store-details",
    component: BaseStoreComponent,
    children:[
      {
        path: 'deals',
        component: DealsComponent,
        
      },{
        path: 'fronts',
        component: FrontsComponent
      },{
        path: 'lines',
        component: LinesComponent
      }
    ]
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class StoreInternalRoutingModule {
}
