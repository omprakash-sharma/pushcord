import {ModuleWithProviders, NgModule} from "@angular/core";

import {NoAuthGuard} from "./no-auth-guard.service";
import {SharedModule} from "../shared";
import {LandingPageFooterComponent} from "./landing-page-footer/landing-page-footer.component";
import {LandingPageNavComponent} from "./landing-page-nav/landing-page-nav.component";
import {AppLandingPageComponent} from "./landing-page/landing-page.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {FormLoadDirective} from "./login-page/form-load.directive";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {StoreComponent} from "./store/store.component";
import {RouterModule} from "@angular/router";
import {CustomMaterialModule} from "./custom-material.module";

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: "login",
    component: LoginPageComponent,
    canActivate: [NoAuthGuard],
    data: {
      action: "LOGIN"
    }
  },
  {
    path: "register",
    component: LoginPageComponent,
    canActivate: [NoAuthGuard],
    data: {
      action: "REGISTER"
    }
  },
  {
    path: "landing-page",
    component: AppLandingPageComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: "store",
    component: StoreComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: "",
    redirectTo: "/landing-page",
    pathMatch: "full"
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule,
    CustomMaterialModule
  ],
  declarations: [
    AppLandingPageComponent,
    LandingPageNavComponent,
    LandingPageFooterComponent,
    StoreComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FormLoadDirective
  ],
  entryComponents: [LoginFormComponent, RegisterFormComponent],
  exports: [RouterModule],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {
}
