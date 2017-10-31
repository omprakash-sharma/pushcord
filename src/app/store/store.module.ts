import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';

import { BaseStoreComponent } from './base-store.component';
//import { StoreInternalRoutingModule } from './store-internal-routing.module';
import { CustomMaterialModule } from "./custom-material.module";
import { DealsComponent } from './view-by-deals/deals.component';
import { FrontsComponent } from './view-by-fronts/fronts.component';
import { LinesComponent } from './view-by-lines/lines.component';

const route:Route[] = [
  {
    path:"",
    component: BaseStoreComponent,
    // children:[
    //   {
    //     path: 'deals',
    //     component: DealsComponent,
        
    //   },{
    //     path: 'fronts',
    //     component: FrontsComponent
    //   },{
    //     path: 'lines',
    //     component: LinesComponent
    //   }
    // ]
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CustomMaterialModule
  ],
  declarations: [BaseStoreComponent, DealsComponent, FrontsComponent, LinesComponent]
})
export class StoreModule {
  constructor(){console.log('store module connected...')}
}
