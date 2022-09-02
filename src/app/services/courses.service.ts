import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../core/interfaces/course';
import { environment } from '../../environments/environment';
import {Student} from '../core/interfaces/student';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private api:string = environment.api

  constructor(private http: HttpClient) {}

    getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.api}/Courses`);
    }

    newCourse(course: Course){
      return this.http.post<Course>(`${this.api}/Courses`,course)
    }

    modifyCourse(course: Course){
      return this.http.put<Course>(`${this.api}/Courses/${course.id}`,course)
    }

    deleteCourse(id: string){
      return this.http.delete<Course>(`${this.api}/Courses/${id}`)
    }

}
