import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RankingService, Score } from '../../services/ranking.service';


@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent  {

  topTen$: Observable<any>
  datasurce: Score[] = []

  constructor(
    private RankingService:RankingService
  ) {
    this.topTen$ = this.RankingService.getObservable();
   
  }
}

