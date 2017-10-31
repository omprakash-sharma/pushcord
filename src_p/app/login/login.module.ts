import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CustomMaterialModule} from "./custom-material.module";

import {AppLandingPageComponent} from "./landing-page/landing-page.component";
import {LandingPageNavComponent} from "./landing-page-nav/landing-page-nav.component";
import {LandingPageFooterComponent} from "./landing-page-footer/landing-page-footer.component";
import {StoreComponent} from "./store/store.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {FormLoadDirective} from "./login-page/form-load.directive";
import {MAT_PLACEHOLDER_GLOBAL_OPTIONS} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "landing-page",
        component: AppLandingPageComponent
      },
      {
        path: "store",
        component: StoreComponent
      }, {
        path: "login",
        component: LoginPageComponent,
        data: {
          action: "LOGIN"
        }
      }, {
        path: "register",
        component: LoginPageComponent,
        data: {
          action: "REGISTER"
        }
      }
    ]),
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AppLandingPageComponent, LandingPageNavComponent, LandingPageFooterComponent
    , StoreComponent, LoginPageComponent, LoginFormComponent, RegisterFormComponent, FormLoadDirective],
  exports: [RouterModule],
  entryComponents: [ LoginFormComponent, RegisterFormComponent ],
  providers: [
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'auto'}}
  ]
})
export class LoginModule {
}
