import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from 'src/app/core/models/course.state';
import * as fromCourse from './course.reducer';



export const selectorCoursesState = createFeatureSelector<CourseState>(
  fromCourse.courseFeatureKey
);

export const selectorLoadingCourses = createSelector(
  selectorCoursesState,
  (state: CourseState) => state.loading
);

export const selectorCourseList = createSelector(
  selectorCoursesState,
  (state: CourseState) => state.courses
);
