import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course } from '../core/models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  
  courseSubject = new Subject<any>()

  private readonly api: string = environment.api;

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}/courses`);
  }


  newCourse(course: Course):Observable<Course> {
    return this.http
      .post<Course>(`${this.api}/courses`, course)
        .pipe(catchError(this.handleError))
        .pipe(tap({
          next: () => this.courseSubject.next(course),
        }))

  }


  modifyCourse(course: Course):Observable<Course> {
    return this.http
      .put<Course>(`${this.api}/courses/${course.id}`, course)
        .pipe(catchError(this.handleError))
        .pipe(tap({
          next: () => this.courseSubject.next(course),
        }))
      ; 
  }


  deleteCourse(course:Course):Observable<Course> {
    return this.http
      .delete<Course>(`${this.api}/courses/${course.id}`)
      .pipe(catchError(this.handleError))
      .pipe(tap({
        next: () => this.courseSubject.next(course),
      })
    ); 
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Client side error', error.error.message);
    }else{
      console.warn('Server side error', error.status, error.message)
      alert('There was a communication error, please try again')
    }
    return throwError(() => new Error('HTTP communication error'));
  }



}
