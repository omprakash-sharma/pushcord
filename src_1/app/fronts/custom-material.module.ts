import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule, MatCardModule, MatGridListModule, MatMenuModule, MatIconModule, MatRippleModule, MatButtonModule,
  MatAutocompleteModule, MatExpansionModule, MatTabsModule
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
    MatTabsModule
  ]
})
export class CustomMaterialModule { }
