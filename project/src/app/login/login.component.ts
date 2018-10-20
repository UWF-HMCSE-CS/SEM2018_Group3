import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log('onSubmit()');
    this.http.get<Observable<User>>('api/maintenanceCalendar').subscribe(
      data => {},
      err => {
        this.snackBar.open(
          'Could not find account.  Please create a new account.',
          '',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyleError'
          }
        );
      }
    );
  }

  onNewAccount() {
    this.router.navigateByUrl('/newAccount');
  }
}
