import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user.model';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedInUser = new User();
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.loggedInUser = user;
      } else if (user === null) {
        this.loggedInUser.email = '';
        this.loggedInUser.password = '';
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.data.login(form.value.email, form.value.password).subscribe(user => {
      console.log(this.loggedInUser);
      this.loggedInUser = user;
      if (this.loggedInUser === null) {
        this.loggedInUser = new User();
        this.loggedInUser.email = form.value.email;
        this.snackBar.open('Password incorrect or account not found.', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'snackBarStyle'
        });
      } else if (this.loggedInUser.type !== undefined) {
        this.loggedInUser = user;
        if (this.loggedInUser.type.includes('patient')) {
          this.router.navigateByUrl('/user');
        } else if (this.loggedInUser.type.includes('professional')) {
          this.router.navigateByUrl('/professional');
        }
      }
    });
  }

  onNewAccount() {
    this.router.navigateByUrl('/newAccount');
  }
}
