import { NewAccountDialogComponent } from './new-account-dialog/new-account-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedInUser = new User();
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {}

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '450px',
      height: '315px'
    });
  }

  openNewAccountDialog() {
    this.dialog.open(NewAccountDialogComponent, {
      width: '600px',
      height: '600px'
    });
  }

  onNewAccount() {
    this.router.navigateByUrl('/newAccount');
  }
}
