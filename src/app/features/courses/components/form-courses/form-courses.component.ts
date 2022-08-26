import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';




import { Course, CoursesService } from '../../services/courses.service';






@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.css'],
})
export class FormCoursesComponent implements OnDestroy {

  form: FormGroup;
  courses: Course[] = [];
  subscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.form = fb.group({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      teacher: new FormControl(data.teacher),
    });

    this.subscription = this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  toupdate() {
    this.courses.push(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  toclose() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }









  
}
