import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/atoms/primary-button/primary-button.component';
import { BasicInputComponent } from './components/molecules/basic-input/basic-input.component';
import { CloseButtonComponent } from './components/atoms/close-button/close-button.component';
import { ModalComponent } from './components/organisms/modal/modal.component';


@NgModule({
  declarations: [
    PrimaryButtonComponent,
    BasicInputComponent,
    CloseButtonComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
