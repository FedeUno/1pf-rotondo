import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../core/interfaces/student';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private api:string = environment.api
  
  constructor(private http: HttpClient)  {    }

    obtenerStudents(): Observable<Student[]> {
      return this.http.get<Student[]>(`${environment.api}/Students`);
    }

    newStudent(student: Student){
      return this.http.post<Student>(`${this.api}/Students`,student)
    }

    modifyStudent(student: Student){
      return this.http.put<Student>(`${this.api}/Students/${student.id}`,student)
    }

    deleteStudent(id: string){
      return this.http.delete<Student>(`${this.api}/Students/${id}`)
    }

}


