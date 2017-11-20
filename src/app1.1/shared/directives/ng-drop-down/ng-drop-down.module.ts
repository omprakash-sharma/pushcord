import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgDropDownDirective} from "./ng-drop-down.directive";
import {dropdownOverlayComponent} from "./ng-dropdown-overlay.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgDropDownDirective,
    dropdownOverlayComponent
  ],
  exports: [
    NgDropDownDirective,
    dropdownOverlayComponent
  ],
  entryComponents: [dropdownOverlayComponent]
})
export class NgDropDownModule {
}
