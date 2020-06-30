import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<LoginComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['admin/anlytics']);
    this.dialogRef.close();
  }

}
