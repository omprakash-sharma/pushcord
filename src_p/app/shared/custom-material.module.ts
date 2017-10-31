import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,
  MatRippleModule, MatSelectModule
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
    MatSelectModule
  ]
})
export class CustomMaterialModule { }
