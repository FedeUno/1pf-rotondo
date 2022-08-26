import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCoursesComponent } from './components/form-courses/form-courses.component';
import { DashboardCursosComponent } from './components/dashboard-courses/dashboard-courses.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCursosComponent,
    children: [
      { path: 'list', component: FormCoursesComponent },
      { path: 'list', component: FormCoursesComponent },
      { path: 'list', component: FormCoursesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
