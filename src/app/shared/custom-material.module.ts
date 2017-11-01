import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatCheckboxModule, MatRadioModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class CustomMaterialModule { }
