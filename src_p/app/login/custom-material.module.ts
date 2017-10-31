import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatInputModule, MatCardModule, MatCheckboxModule, MatRadioModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class CustomMaterialModule { }
