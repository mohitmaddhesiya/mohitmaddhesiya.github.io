import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.scss']
})
export class TeamRankingComponent implements OnInit {
  elements: any = [
    {id: 'BAR', win: 1, loss: 1, handle: '@mdo', mapedScore: 33},
    {id: 'BLUEBIRD', win: 1, loss: 1, handle: '@fat', mapedScore: 20},
    {id: 'THUTHIBARI', win: 1, loss: 0, handle: '@twitter', mapedScore: 15},
    {id: 'EAGLE', win: 2, loss: 2, handle: '@twitter', mapedScore: 12},
    {id: 'FOX', win: 1, loss: 1, handle: '@twitter', mapedScore: 10},
    {id: 'DINOSUR', win: 2, loss: 0, handle: '@twitter', mapedScore: 5},
  ];

  headElements = ['TEAM', 'WIN', 'LOSS', 'PLAYED', 'MAPED SCORE'];
  constructor() { }

  ngOnInit(): void {
  }

}
