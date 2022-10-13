import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import {DashboardComponent} from './shared/layouts/dashboard/dashboard.component';
import { AdminGuard } from './features/auth/components/guards/admin.guards';
import { AuthGuard } from './features/auth/components/guards/auth.guards';

const routes: Routes = [
/*   {
    path: 'students',
    loadChildren: () =>
      import('./features/students/students.module').then(
        (m) => m.StudentsModule
      ),
  }, */

  {
    path: 'courses',
    loadChildren: () =>
      import('./features/courses/courses.module').then((m) => m.CoursesModule),
      canLoad: [AdminGuard],
      canActivate: [AdminGuard]
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
      canLoad: [AuthGuard],
      canActivate: [AuthGuard]
      
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

  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  { path: '', component: DashboardComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
