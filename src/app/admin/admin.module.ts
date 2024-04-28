import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './atoms/primary-button/primary-button.component';
import { BasicInputComponent } from './molecules/basic-input/basic-input.component';


@NgModule({
  declarations: [
    PrimaryButtonComponent,
    BasicInputComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
