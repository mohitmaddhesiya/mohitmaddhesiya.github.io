import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-player',
  templateUrl: './top-player.component.html',
  styleUrls: ['./top-player.component.scss']
})
export class TopPlayerComponent implements OnInit {
  stars = Array(5);
  members: any = [
    {
      image: 'assets/top-player/danylo.jpg',
      name: 'Danylo Tesenko (Footbal Player)'
    },
    {
      image: 'assets/top-player/colin.jpg',
      name: 'Colin Kaepernick (Basketball Player)'
    },
  ];

  headElements = ['Entry Fragger'];
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  showNextImage() {
    if (this.counter < this.members.length -1) {
      this.counter += 1;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
}
