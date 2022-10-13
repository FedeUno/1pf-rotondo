import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from '../../../../../services/courses.service';
import { Course } from 'src/app/core/models/course';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { CourseState } from 'src/app/core/models/course.state';
import { loadCourses } from '../../../state/course.actions';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
})
export class EditCoursesComponent {
  
  form: FormGroup;
  
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: Course,
    private coursesService: CoursesService,
    private dialogRef: MatDialogRef<EditCoursesComponent>,
    private store: Store<CourseState>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar   
   
  ) {
    this.form = this.fb.group({
      name: new FormControl(data.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      startDate: new FormControl(data.startDate, [Validators.required]),
      finishDate: new FormControl(data.finishDate, [Validators.required]),
      teacher: new FormControl(data.teacher, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    }); 
  }

  toUpdate() {
    const c: Course = {
      id: this.data.id,
      name: this.form.value.name,
      startDate: this.form.value.startDate,
      finishDate: this.form.value.finishDate,
      teacher: this.form.value.teacher,
    };

    this.coursesService.modifyCourse(c).subscribe((course)=>{
      this.store.dispatch(loadCourses());
      this.snackBar.open(`${course.name} was edited correctly`, 'Ok', {duration:3000})
    })
    this.dialogRef.close(c);    
  }

  toClose() {
    this.dialogRef.close();
  }
}
