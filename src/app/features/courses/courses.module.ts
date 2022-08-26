import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormCoursesComponent } from './components/form-courses/form-courses.component';
import { DashboardCursosComponent } from './components/dashboard-courses/dashboard-courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [DashboardCursosComponent, FormCoursesComponent],
  imports: [CommonModule, MaterialModule, CoursesRoutingModule],
  exports: [],

  providers: [CoursesService],
})
export class CoursesModule {}
