import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { DataSharingService } from './services/data-sharing.service';

import { BaseStoreComponent } from './base-store.component';
//import { CustomMaterialModule } from "./custom-material.module";
import { CustomMaterialModule } from "../../shared/custom-material.module";
import { DealsComponent } from './view-by-deals/deals.component';
import { FrontsComponent } from './view-by-fronts/fronts.component';
import { LinesComponent } from './view-by-lines/lines.component';
import { ActivityFilterComponent } from './activity-filter/activity-filter.component';

import { RowsplitPipe } from './filters/rowsplit.pipe';

const route:Route[] = [
  {
    path:"",
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
    RouterModule.forChild(route),
    CustomMaterialModule
  ],
  declarations: [BaseStoreComponent, DealsComponent, FrontsComponent, LinesComponent, RowsplitPipe,ActivityFilterComponent],
  providers:[]
})
export class StoreModule {
  constructor(){console.log('store module connected....')}
}
