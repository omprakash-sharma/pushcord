import {SharedMaterialModule} from "./shared-material.module";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import "hammerjs";

import {ListErrorsComponent} from "./components/list-errors.component";
import {ShowAuthedDirective} from "./directives/show-authed.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    ShowAuthedDirective,
    SharedMaterialModule
  ]
})
export class SharedModule {
}
