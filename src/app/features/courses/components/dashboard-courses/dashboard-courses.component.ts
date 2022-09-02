import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';
import { CoursesService } from '../../../../services/courses.service';
import { FormCoursesComponent } from '../form-courses/form-courses.component';
import { Course } from '../../../../core/interfaces/course';




@Component({
  selector: 'app-dashboard-courses',
  templateUrl: './dashboard-courses.component.html',
  styleUrls: ['./dashboard-courses.component.css'],
})
export class DashboardCursosComponent implements OnInit, OnDestroy {
  
  courses: Course[] = [];

  courses$!: Observable<Course[]>

  subscription!: Subscription;

  columns: string[] = ['name', 'teacher', 'actions'];

  dataSource: MatTableDataSource<Course>;

  @ViewChild(MatTable) table!: MatTable<Course>;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,    
    ) {

      this.subscription = this.coursesService.getCourses()
     .subscribe((courses) => {this.courses = courses }) 



    this.dataSource = new MatTableDataSource(this.courses);
  }




/*   delete(element: Course) {
    this.dataSource.data = this.dataSource.data.filter(
      (course: Course) => course.id != element.id
    );
    this.courses = this.dataSource.data  
 
  } */

  edit(element: Course) {
    const dialogRef = this.dialog.open(FormCoursesComponent, {
      width: '280px',
      data: element,
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const item = this.courses.find(
          (course) => course.id === result.id
        );
        const index = this.courses.indexOf(item!);
        this.courses[index] = result;
        this.table.renderRows();
      }
    });
  }

   filter(event: Event) {
    const obtainedValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = obtainedValue.trim().toLocaleLowerCase();
  } 

  ngOnInit(): void {
      this.courses$ = this.coursesService.getCourses()
  }

  delete(id:string){
    this.coursesService.deleteCourse(id).subscribe((course:Course)=>{
      this.ngOnInit()
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
