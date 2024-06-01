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
import { TechnologiesComponent } from './components/pages/technologies/technologies.component';
import { TechnologyFormComponent } from './components/molecules/technology-form/technology-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechnologyService } from './technology/services/technology.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ModalMessageComponent } from './components/molecules/modal-message/modal-message.component';
import { BasicSelectComponent } from './components/molecules/basic-select/basic-select.component';
import { OnClassItemComponent } from './components/molecules/on-class-item/on-class-item.component';
import { PaginationComponent } from './components/molecules/pagination/pagination.component';
import { CapacityFormComponent } from './components/molecules/capacity-form/capacity-form.component';
import { BasicMultiselectComponent } from './components/molecules/basic-multiselect/basic-multiselect.component';
import { SelectedValueTextComponent } from './components/atoms/selected-value-text/selected-value-text.component';
import { BootcampFormComponent } from './components/molecules/bootcamp-form/bootcamp-form.component';
import { BootcampVersionComponent } from './components/pages/bootcamp-version/bootcamp-version.component';
import { BootcampVersionFormComponent } from './components/molecules/bootcamp-version-form/bootcamp-version-form.component';
import { SecondaryButtonComponent } from './components/atoms/secondary-button/secondary-button.component';
import { LoginComponent } from './components/pages/login/login.component';

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
    TechnologiesComponent,
    CapacitiesComponent,
    BootcampsComponent,
    TechnologyFormComponent,
    ModalMessageComponent,
    BasicSelectComponent,
    OnClassItemComponent,
    PaginationComponent,
    CapacityFormComponent,
    BasicMultiselectComponent,
    SelectedValueTextComponent,
    BootcampFormComponent,
    BootcampVersionComponent,
    BootcampVersionFormComponent,
    SecondaryButtonComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    TechnologyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
})
export class AppModule {}
