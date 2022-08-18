import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Score{
  student: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  ranking: Score[] = [

    {
      student: 'Lucas',
      score: 20
    },
    {
      student: 'Nicolás',
      score: 30
    },
    {
      student: 'Esteban',
      score: 40
    },
    {
      student: 'Lizandro',
      score: 50
    },
    {
      student: 'Federico',
      score: 60
    }
  ]

  private ranking$ : Observable<any> 

  constructor() { 
    this.ranking$ = new Observable<any>((suscriptor)=>suscriptor.next(this.ranking ));
   
  }
 getObservable(){
      return this.ranking$
    }
}
