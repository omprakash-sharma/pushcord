import {ModuleWithProviders, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";
import {FrontsModule} from "./fronts/fronts.module";
import {AppLandingPageComponent} from "./auth/landing-page/landing-page.component";
import {NoAuthGuard} from "./auth/no-auth-guard.service";
import { StoreModule } from './store/store.module';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import {
  ApiService,
  AuthGuard,
  JwtService,
  SharedModule,
  UserService
} from "./shared";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([{
  path: "landing-page",
  component: AppLandingPageComponent,
  canActivate: [NoAuthGuard]
}], {useHash: false});

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    FrontsModule,
    rootRouting,
    StoreModule
  ],
  providers: [ApiService,
    AuthGuard,
    JwtService,
    UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
