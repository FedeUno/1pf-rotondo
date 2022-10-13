import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/core/models/course';
import { CourseState } from 'src/app/core/models/course.state';
import { CoursesService } from '../../../../services/courses.service';
import { loadCourses } from '../../state/course.actions';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
})
export class AddCourseComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private store: Store<CourseState>,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
      teacher: new FormControl('', [Validators.required]),
    });
  }

  addCourse() {
    const c: Course = {
      id: '',
      name: this.form.value.name,
      startDate: this.form.value.startDate,
      finishDate: this.form.value.finishDate,
      teacher: this.form.value.teacher,
    };

    this.coursesService.newCourse(c).subscribe((c) => {
      this.store.dispatch(loadCourses());
      this.snackBar.open(`${c.name} was added successfully`, 'Ok', {
        duration: 3000,
      });
      this.router.navigate(['courses']);
    });
  }

  toClose() {
    this.router.navigate(['courses']);
  }
}
