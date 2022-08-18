import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentCrudComponent } from '../student-crud/student-crud.component';
import { StudentsService } from '../../../services/students.service';
import { map, Subscription } from 'rxjs'

export interface Student {
  id: number;
  name: string;
  lastname: string;
  course: string;
  score: number;
  enrolled: boolean;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  suscription!:Subscription;
  columns: string[] = ['name', 'course', 'score', 'enrolled', 'actions'];

  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatTable) table!: MatTable<Student>;

  constructor(
    private dialog: MatDialog,
    private studentService: StudentsService
  ) {
    
    this.suscription = this.studentService.getStudents().pipe(
      map( (students:Student[]) => students.filter ((student)=>student.score > 50) )  
    ).subscribe((student) => {this.students = student }) 

   this.dataSource = new MatTableDataSource(this.students);
   
  }

  ngOnInit(): void {  }

  delete(element: Student) {
    this.dataSource.data = this.dataSource.data.filter(
      (course: Student) => course.id != element.id
    );
    this.students = this.dataSource.data  
    console.log(this.students)
  }

  edit(element: Student) {
    const dialogRef = this.dialog.open(StudentCrudComponent, {
      width: '280px',
      data: element,
    });
    console.log(this.students)
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


  add(){
    
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe()
  }
}
