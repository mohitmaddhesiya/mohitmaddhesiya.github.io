import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.scss']
})
export class UpcomingMatchComponent implements OnInit {
  upcomingMatchs = [{
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMathcIcon: 'assets/upcoming-matches/fotballlMatch1.png',
    secondMathcIcon: 'assets/upcoming-matches/match2.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMathcIcon: 'assets/upcoming-matches/match3.png',
    secondMathcIcon: 'assets/upcoming-matches/match4.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMathcIcon: 'assets/upcoming-matches/fotballlMatch1.png',
    secondMathcIcon: 'assets/upcoming-matches/match2.png',
    date: 'August 19, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMathcIcon: 'assets/upcoming-matches/match3.png',
    secondMathcIcon: 'assets/upcoming-matches/match4.png',
    date: 'August 20, 2020',
    venu: ' Allianz Stadium'
  }, {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMathcIcon: 'assets/upcoming-matches/fotballlMatch1.png',
    secondMathcIcon: 'assets/upcoming-matches/match2.png',
    date: 'August 21, 2020',
    venu: ' Allianz Stadium'
  }];
  latestResult: any = [{
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMatchScore: 2,
    secondMatchScore: 1,
    firstMathcIcon: 'assets/upcoming-matches/match3.png',
    secondMathcIcon: 'assets/upcoming-matches/match4.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }, {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMatchScore: 1,
    secondMatchScore: 0,
    firstMathcIcon: 'assets/upcoming-matches/fotballlMatch1.png',
    secondMathcIcon: 'assets/upcoming-matches/match2.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMatchScore: 0,
    secondMatchScore: 2,
    firstMathcIcon: 'assets/upcoming-matches/match3.png',
    secondMathcIcon: 'assets/upcoming-matches/match4.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }, {
    firstMatch: 'Juventus',
    scondMatch: 'Real Soccer',
    firstMatchScore: 2,
    secondMatchScore: 1,
    firstMathcIcon: 'assets/upcoming-matches/fotballlMatch1.png',
    secondMathcIcon: 'assets/upcoming-matches/match2.png',
    date: 'August 15, 2020',
    venu: ' Allianz Stadium'
  },
  {
    firstMatch: 'Spursvus',
    scondMatch: 'Valenciadd',
    firstMatchScore: 1,
    secondMatchScore: 2,
    firstMathcIcon: 'assets/upcoming-matches/match3.png',
    secondMathcIcon: 'assets/upcoming-matches/match4.png',
    date: 'August 17, 2020',
    venu: ' Allianz Stadium'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
