import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentCrudComponent } from '../student-crud/student-crud.component';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  course: string;
  score: number;
  enrolled: boolean;
}

const ELEMENT_DATA: Student[] = [
  {
    id: 1,
    name: 'Martín',
    lastname: 'García',
    course: 'Angular',
    score: 65,
    enrolled: true,
  },
  {
    id: 2,
    name: 'Evaristo',
    lastname: 'Pintos',
    course: 'NodeJS',
    score: 34,
    enrolled: false,
  },
  {
    id: 3,
    name: 'Paula',
    lastname: 'Cinderella',
    course: 'ReactJS',
    score: 87,
    enrolled: true,
  },
  {
    id: 4,
    name: 'Cristin',
    lastname: 'Lagarde',
    course: 'MongoDB',
    score: 12,
    enrolled: false,
  },
  {
    id: 5,
    name: 'Paul',
    lastname: 'Lowed',
    course: '.NET',
    score: 90,
    enrolled: true,
  },
  {
    id: 6,
    name: 'Susana',
    lastname: 'Horia',
    course: 'SQL',
    score: 44,
    enrolled: false,
  },
  {
    id: 7,
    name: 'Lorem',
    lastname: 'Ipsum',
    course: 'HTML',
    score: 53,
    enrolled: false,
  },
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  columns: string[] = ['name', 'course', 'score', 'enrolled', 'actions'];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource(
    ELEMENT_DATA
  );

  @ViewChild(MatTable) table!: MatTable<Student>;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  delete(element: Student) {
    this.dataSource.data = this.dataSource.data.filter(
      (course: Student) => course.id != element.id
    );
  }

  edit(element: Student) {
    const dialogRef = this.dialog.open(StudentCrudComponent, {
      width: '350px',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const item = this.dataSource.data.find(
          (student) => student.id === result.id
        );
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = result;
        this.table.renderRows();
      }
    });
  }

  filter(event: Event) {
    const obtainedValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = obtainedValue.trim().toLocaleLowerCase();
  }
}
