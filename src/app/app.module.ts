import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './components/atoms/primary-button/primary-button.component';
import { BasicInputComponent } from './components/molecules/basic-input/basic-input.component';
import { CloseButtonComponent } from './components/atoms/close-button/close-button.component';
import { ModalComponent } from './components/organisms/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    BasicInputComponent,
    CloseButtonComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
