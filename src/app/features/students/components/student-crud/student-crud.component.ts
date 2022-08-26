import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { Student, StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css'],
})
export class StudentCrudComponent implements OnDestroy{
  form: FormGroup;
  students: Student[] = [];
  subscription: Subscription;

  constructor(
    private studentService: StudentsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.form = fb.group({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      lastname: new FormControl(data.lastname),
      course: new FormControl(data.course),
      score: new FormControl(data.score),
      enrolled: new FormControl(data.enrolled),
    });

    this.subscription = this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  toupdate() {
    this.students.push(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  toclose() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
