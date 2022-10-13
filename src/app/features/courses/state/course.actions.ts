import { createAction, props } from '@ngrx/store';
import { Course } from '../../../core/models/course';


export const loadCourses = createAction('[Course List] Load Courses');

export const loadedCourses = createAction(
  '[Course List] Loaded Courses',
  props<{ courses: Course[] }>()
);
