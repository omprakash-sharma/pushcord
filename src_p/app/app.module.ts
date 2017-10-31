import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing/app-routing.module";
import {LoginModule} from "./login/login.module";
import {FrontsModule} from "./application/fronts.module";

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    FrontsModule,
    NgxCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
