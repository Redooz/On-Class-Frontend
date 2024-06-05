import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LibraryComponent } from './components/templates/library/library.component';
import { TechnologiesComponent } from './components/pages/technologies/technologies.component';
import { CapacitiesComponent } from './components/pages/capacities/capacities.component';
import { BootcampsComponent } from './components/pages/bootcamps/bootcamps.component';
import { BootcampVersionComponent } from './components/pages/bootcamp-version/bootcamp-version.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TemplateComponent } from './components/templates/template/template.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'library',
        component: LibraryComponent,
        children: [
          {
            path: 'technologies',
            component: TechnologiesComponent
          },
          {
            path: 'capacities',
            component: CapacitiesComponent
          },
          {
            path: 'bootcamps',
            component: BootcampsComponent,
          },
          {
            path: '',
            redirectTo: 'technologies',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'library/bootcamps/:id',
        component: BootcampVersionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
