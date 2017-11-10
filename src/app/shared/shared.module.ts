import {CustomMaterialModule} from "./custom-material.module";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {NgxCarouselModule} from "ngx-carousel";
import "hammerjs";


import {ListErrorsComponent} from "./components/list-errors.component";
import {ShowAuthedDirective} from "./directives/show-authed.directive";

import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AdsSliderComponent} from "./components/ads-slider/ads-slider.component";
import {RunningTransactionsComponent} from "./components/running-transactions/running-transactions.component";
import { NoComponentFoundComponent } from './components/no-component-found/no-component-found.component';
import { ActivityFilterComponent } from './components/activity-filter/activity-filter.component';
import {NgDropDownModule} from "./directives/ng-drop-down/ng-drop-down.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    CustomMaterialModule,
    NgxCarouselModule,
    NgDropDownModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    NavBarComponent,
    AdsSliderComponent,
    RunningTransactionsComponent,
    NoComponentFoundComponent,
    ActivityFilterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    CustomMaterialModule,
    NgxCarouselModule,
    NavBarComponent,
    AdsSliderComponent,
    RunningTransactionsComponent,
    NoComponentFoundComponent,
    ActivityFilterComponent,
    NgDropDownModule
  ]
})
export class SharedModule {
}
