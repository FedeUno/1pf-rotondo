import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from '../app/components/student/student-list/student-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BeginComponent } from './components/begin/begin.component';
import { CourseComponent } from './components/course/course.component';
import { TopTenComponent } from './components/top-ten/top-ten.component';

const routes: Routes = [
  { path: 'begin', component: BeginComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'top-ten', component: TopTenComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },

  { path: '', redirectTo: 'begin', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
