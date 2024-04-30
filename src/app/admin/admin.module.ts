import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './atoms/primary-button/primary-button.component';
import { BasicInputComponent } from './molecules/basic-input/basic-input.component';
import { CloseButtonComponent } from './atoms/close-button/close-button.component';
import { ModalHeaderComponent } from './molecules/modal-header/modal-header.component';


@NgModule({
  declarations: [
    PrimaryButtonComponent,
    BasicInputComponent,
    CloseButtonComponent,
    ModalHeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
