import {NgModule} from "@angular/core";

import {
  MatAutocompleteModule, MatButtonToggleModule, MatDialogModule,
  MatExpansionModule, MatSelectModule, MatTabsModule
} from "@angular/material";

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    MatSelectModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule
  ]
})

export class CustomMaterialModule {
}
