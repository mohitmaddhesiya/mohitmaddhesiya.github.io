import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickHome(){
    this.router.navigate(['dashboard/home']);
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }
}
