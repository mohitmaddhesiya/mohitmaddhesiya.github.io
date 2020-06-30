import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent implements OnInit {
  cards = [{
      title: 'Football Under 20',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    }
  ];
  slides: any = [[]];
  name = 'sport';
  timeLeft = 60;
  interval;
  constructor(private router: Router) { }
  chunk(arr: any, chunkSize: any) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 1);
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000 );

  }
  onClickRegistration(){
    this.router.navigate(['dashboard/registration']);
  }

}
