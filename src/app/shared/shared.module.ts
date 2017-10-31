import { CustomMaterialModule } from './custom-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { HeaderComponent } from './layout/header.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdsSliderComponent } from './ads-slider/ads-slider.component';
import { RunningTransactionsComponent } from './running-transactions/running-transactions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    CustomMaterialModule,
    NgxCarouselModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    HeaderComponent,
    NavBarComponent,
    AdsSliderComponent,
    RunningTransactionsComponent
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
    RunningTransactionsComponent
  ]
})
export class SharedModule {}
