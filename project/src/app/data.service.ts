import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loggedInUser = new BehaviorSubject<User>(new User());

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getLoggedInUser() {
    return this.loggedInUser;
  }

  createNewAccount(form) {
    console.log(form);
    this.http
      .put<User>('api/newAccount', JSON.stringify(form), httpOptions)
      .subscribe(
        data => {
          console.log(data);
          this.loggedInUser.next(data);
          this.snackBar.open('New Account Created Successfully.', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyle'
          });
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.snackBar.open('An Error Has Occurred. Please try again.', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyleError'
          });
        }
      );
    return this.loggedInUser;
  }

  login(email, password) {
    this.http
      .post<User>('api/login', JSON.stringify({ email, password }), httpOptions)
      .subscribe(
        data => {
          console.log(data);
          this.loggedInUser.next(data);
          if (data === null) {
            const user = new User();
            user.email = email;
            this.loggedInUser.next(user);
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.snackBar.open('An Error Has Occurred. Please try again.', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyleError'
          });
        }
      );
    return this.loggedInUser;
  }
}
