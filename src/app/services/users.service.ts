import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../core/models/user';



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  userSubject = new Subject<any>()

  private readonly api: string = environment.api;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`);
  }


  newUser(user: User):Observable<User> {
    return this.http
      .post<User>(`${this.api}/users`, user)
        .pipe(catchError(this.handleError))
        .pipe(tap({
          next: () => this.userSubject.next(user),
        }))

  }


  modifyUser(user: User):Observable<User> {
    return this.http
      .put<User>(`${this.api}/users/${user.id}`, user)
        .pipe(catchError(this.handleError))
        .pipe(tap({
          next: () => this.userSubject.next(user),
        }))
      ; 
  }


  deleteUser(user:User):Observable<User> {
    return this.http
      .delete<User>(`${this.api}/users/${user.id}`)
      .pipe(catchError(this.handleError))
      .pipe(tap({
        next: () => this.userSubject.next(user),
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
