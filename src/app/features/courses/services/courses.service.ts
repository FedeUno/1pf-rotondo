import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Course {
  id:number;
  name:string;
  teacher:string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      teacher:'Evaristo'
    },
    {
      id: 2,
      name: 'ReactJS',
      teacher:'Euginius'
    },
    {
      id: 3,
      name: 'NodeJS',
      teacher:'Eulasia'
    },
    {
      id: 4,
      name: 'HTML',
      teacher:'Esteban'
    },
  ];

  private courses$: Observable<any>;


  constructor() {
    this.courses$ = new Observable<any>((suscriptor)=> {
      suscriptor.next(this.courses)
    })

   }

   getCourses(){
    return this.courses$
   }
}