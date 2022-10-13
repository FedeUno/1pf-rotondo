import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import { loadCourses, loadedCourses } from './course.actions';


@Injectable()
export class CoursesEffects {
  loadCoursesEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      mergeMap(() =>
        this.coursesService
          .getCourses()
          .pipe(map((courses) => loadedCourses({ courses })))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
