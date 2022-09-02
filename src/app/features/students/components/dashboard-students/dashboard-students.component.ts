import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentCrudComponent } from '../student-crud/student-crud.component';
import { map, Subscription } from 'rxjs';
import { StudentsService } from '../../../../services/students.service';
import { Student } from 'src/app/core/interfaces/student';


@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.css']
})
export class DashboardStudentsComponent implements OnDestroy {
  students: Student[] = [];
  subscription!:Subscription;
  columns: string[] = ['name', 'course', 'score', 'actions'];

  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatTable) table!: MatTable<Student>;

  constructor(
    private dialog: MatDialog,
    private studentService: StudentsService
  ) {
    
    this.subscription = this.studentService.obtenerStudents()
    .subscribe((students) => {this.students = students })  


/*     this.subscription = this.studentService.obtenerStudents().pipe(
      map( (students:Student[]) => students.filter ((student)=>student.score > 50) )  
    ).subscribe((student) => {this.students = student })  */

   this.dataSource = new MatTableDataSource(this.students);
   
  }


  delete(element: Student) {
    this.dataSource.data = this.dataSource.data.filter(
      (course: Student) => course.id != element.id
    );
    this.students = this.dataSource.data  
 
  }

  edit(element: Student) {
    const dialogRef = this.dialog.open(StudentCrudComponent, {
      width: '280px',
      data: element,
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const item = this.students.find(
          (student) => student.id === result.id
        );
        const index = this.students.indexOf(item!);
        this.students[index] = result;
        this.table.renderRows();
      }
    });
  }

   filter(event: Event) {
    const obtainedValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = obtainedValue.trim().toLocaleLowerCase();
  } 


  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
