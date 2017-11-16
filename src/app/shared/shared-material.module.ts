import {NgModule} from "@angular/core";

import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,
  MatRippleModule, MatSelectModule, MatTabsModule
} from "@angular/material";

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
  ]
})
export class SharedMaterialModule {
}
