import { createReducer, on } from '@ngrx/store';
import { CourseState } from '../../../core/models/course.state';
import * as CourseActions from './course.actions';

export const courseFeatureKey = 'courses';

export const initialState: CourseState = { 
  loading: false,
  courses: []
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, (state) => {
    return { ...state, loading: true };
  }),
  on(CourseActions.loadedCourses, (state, { courses }) => {
    return { ...state, loading: false, courses };
  })
);
