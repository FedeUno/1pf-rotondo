import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EditCoursesComponent } from './components/dialog/edit-course/edit-course.component';
import { DashboardCoursesComponent } from './components/dashboard-courses/dashboard-courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesService } from '../../services/courses.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './state/course.effects';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { DeleteCourseComponent } from './components/dialog/delete-course/delete-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { courseFeatureKey, courseReducer } from './state/course.reducer';

@NgModule({
  declarations: [
    DashboardCoursesComponent,
    EditCoursesComponent,
    ListCoursesComponent,
    DeleteCourseComponent,
    AddCourseComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoursesRoutingModule,
    StoreModule.forFeature(courseFeatureKey, courseReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  exports: [],

  providers: [CoursesService],
})
export class CoursesModule {}
