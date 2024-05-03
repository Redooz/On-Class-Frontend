import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './components/atoms/primary-button/primary-button.component';
import { BasicInputComponent } from './components/molecules/basic-input/basic-input.component';
import { CloseButtonComponent } from './components/atoms/close-button/close-button.component';
import { ModalComponent } from './components/organisms/modal/modal.component';
import { SideBarComponent } from './components/organisms/side-bar/side-bar.component';
import { SideBarItemComponent } from './components/molecules/side-bar-item/side-bar-item.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TemplateComponent } from './components/templates/template/template.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { LibraryComponent } from './components/templates/library/library.component';
import { TabTextComponent } from './components/atoms/tab-text/tab-text.component';
import { NavTabComponent } from './components/molecules/nav-tab/nav-tab.component';
import { CapacitiesComponent } from './components/pages/capacities/capacities.component';
import { BootcampsComponent } from './components/pages/bootcamps/bootcamps.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    BasicInputComponent,
    CloseButtonComponent,
    ModalComponent,
    SideBarComponent,
    SideBarItemComponent,
    HomeComponent,
    TemplateComponent,
    HeaderComponent,
    LibraryComponent,
    TabTextComponent,
    NavTabComponent,
    CapacitiesComponent,
    BootcampsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
