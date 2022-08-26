import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { DashboardComponent } from './shared/layouts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('./features/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },

  {
    path: 'courses',
    loadChildren: () =>
      import('./features/courses/courses.module').then((m) => m.CoursesModule),
  },

  /*   {
    path: 'inscriptions',
    loadChildren: () =>
      import('./../features/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
    canActivate: [LoginGuard],
  },
 */

  { path: '', component: DashboardComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
