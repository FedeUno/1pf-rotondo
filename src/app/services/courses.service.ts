import { Injectable } from '@angular/core';


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

  constructor() { }

  getPromiseCourses(){
    return new Promise((resolve,reject)=>{    
      if(this.courses.length > 0){
        resolve (this.courses)  
      } else{
        reject({msn: 'there is an error'})
      }}
      )
    }
      
}


