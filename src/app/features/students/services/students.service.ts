import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  course: string;
  score: number;
  enrolled: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [
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
      course: 'Angular',
      score: 53,
      enrolled: false,
    },
  ];

  private students$: Observable<any>;

  constructor() 
    {
      this.students$ = new Observable<any>((suscriptor)=> {
        suscriptor.next(this.students)
      })
    }


    getStudents(){
      return this.students$
    }


}


