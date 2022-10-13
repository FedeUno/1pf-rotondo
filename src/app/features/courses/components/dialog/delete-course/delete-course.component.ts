import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/core/models/course';
import { loadCourses } from '../../../state/course.actions';
import { CoursesService } from '../../../../../services/courses.service';
import { Store } from '@ngrx/store';
import { CourseState } from 'src/app/core/models/course.state';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
})
export class DeleteCourseComponent {
  dataSource: any;

  constructor(
    private dialogRef: MatDialogRef<DeleteCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private coursesService: CoursesService,
    private store: Store<CourseState>,
    private snackBar: MatSnackBar
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  deleteCourse(course: Course) {
    this.coursesService.deleteCourse(course).subscribe((course) => {
      this.dialogRef.close();
      this.store.dispatch(loadCourses());
      this.snackBar.open(`${course.name} was successfully removed`, 'Ok', {
        duration: 3000,
      });
    });
  }
}
