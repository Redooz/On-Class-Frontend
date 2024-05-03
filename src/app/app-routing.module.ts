import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LibraryComponent } from './components/templates/library/library.component';
import { TechnologiesComponent } from './components/pages/technologies/technologies.component';
import { CapacitiesComponent } from './components/pages/capacities/capacities.component';
import { BootcampsComponent } from './components/pages/bootcamps/bootcamps.component';

const routes: Routes = [
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
        component: BootcampsComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
