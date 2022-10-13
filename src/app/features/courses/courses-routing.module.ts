import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCoursesComponent } from './components/dashboard-courses/dashboard-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCoursesComponent,
  },
  {
    path: 'add',
    component: AddCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
