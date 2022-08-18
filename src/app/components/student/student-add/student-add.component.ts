import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../student-list/student-list.component';
import { StudentsService } from '../../../services/students.service';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnDestroy {
  form: FormGroup;
  students: Student[] = [];
  subscription: Subscription;

  constructor(
    private studentService: StudentsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentAddComponent>,
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

  add() {   
      this.students.push(this.form.value);
      this.dialogRef.close(this.form.value); 
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
