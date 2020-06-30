import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMenus = false;
  menus: string[] = ['Home', 'Find Your Sport', 'Regster ( Team and Player) ', 'Leagues and Cometitions', 'UpComing Events', 'About US', 'Contact'];
  constructor() { }

  ngOnInit(): void {
  }
  showMenu(){
    this.showMenus = !this.showMenus;
  }
}
