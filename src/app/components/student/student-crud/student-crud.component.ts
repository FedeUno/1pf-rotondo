import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../student-list/student-list.component';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css'],
})
export class StudentCrudComponent implements OnInit {
  form: FormGroup;

  constructor(
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
  }

  ngOnInit(): void {}

  toupdate() {
    this.dialogRef.close(this.form.value);
    console.log(this.form);
  }

  toclose() {
    this.dialogRef.close();
  }
}
