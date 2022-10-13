import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CourseState } from 'src/app/core/models/course.state';
import { loadCourses } from '../../state/course.actions';
import { selectorLoadingCourses } from '../../state/course.selectors';


@Component({
  selector: 'app-dashboard-courses',
  templateUrl: './dashboard-courses.component.html',
})
export class DashboardCoursesComponent implements OnInit {
  loading$!: Observable<boolean>;

  constructor(private store: Store<CourseState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.loading$ = this.store.select(selectorLoadingCourses);
  }
}
