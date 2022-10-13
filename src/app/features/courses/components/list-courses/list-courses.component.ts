import { Store } from '@ngrx/store';
import { EditCoursesComponent } from '../dialog/edit-course/edit-course.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable, map } from 'rxjs';
import { CourseState } from 'src/app/core/models/course.state';
import { selectorCourseList } from '../../state/course.selectors';
import { CoursesService } from '../../../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteCourseComponent } from '../dialog/delete-course/delete-course.component';
import { Course } from 'src/app/core/models/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent implements OnInit {
  courses: Course[] = [];

  courses$!: Observable<Course[]>;

  subscription!: Subscription;

  columns: string[] = ['name', 'teacher', 'start', 'finish', 'actions'];

  dataSource: MatTableDataSource<Course>;

  @ViewChild(MatTable) table!: MatTable<Course>;

  constructor(
    private store: Store<CourseState>,
    private dialog: MatDialog,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.courses$ = this.store.select(selectorCourseList);
    this.courses$.pipe(map((data:any)=>this.dataSource = new MatTableDataSource(data)))

/*     this.courses$.subscribe(
      (data) => (this.dataSource = new MatTableDataSource(data))
    ); */
  }

  openDialogEdit(course: Course) {
    this.dialog.open(EditCoursesComponent, {
      width: '300px',
      data: course,
    });
  }

  openDialogDelete(course: Course) {
    this.dialog.open(DeleteCourseComponent, {
      width: '300px',
      data: course,
    });
  }
}
