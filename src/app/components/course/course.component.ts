
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoursesService, Course } from '../../services/courses.service';




@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  courses: any = []

  columns: string[] = ['name', 'teacher'];

  dataSource: MatTableDataSource<Course>;

  constructor(
    private coursesService : CoursesService
  ) {
    this.coursesService.getPromiseCourses()
      .then((courses) => this.courses = courses)
       
    this.dataSource = new MatTableDataSource(this.courses);
    
  }

  ngOnInit(): void { }


}
