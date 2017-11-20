import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule, MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatRippleModule, MatButtonModule,
  MatAutocompleteModule, MatExpansionModule, MatTabsModule,MatButtonToggleModule,MatTooltipModule,MatListModule
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
    MatTabsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatListModule
  ]
})
export class CustomMaterialModule { }
