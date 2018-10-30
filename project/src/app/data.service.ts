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
  private loggedInUser = new BehaviorSubject<User>(new User());
  private allProfessionals = new BehaviorSubject<User[]>([]);
  private allPatients = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getLoggedInUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.loggedInUser.next(user);
    }
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser.next(new User());
    localStorage.removeItem('user');
  }

  private saveUserLocally(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  createNewAccount(form): BehaviorSubject<User> {
    this.http
      .put<User>('api/newAccount', JSON.stringify(form), httpOptions)
      .subscribe(
        data => {
          this.loggedInUser.next(data);
          this.saveUserLocally(data);
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

  login(email, password): BehaviorSubject<User> {
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
          } else {
            this.saveUserLocally(data);
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

  updateUser(originalEmail: string, user: User): BehaviorSubject<User> {
    this.http
      .put<User>(
        'api/updateUser',
        JSON.stringify({ originalEmail, user }),
        httpOptions
      )
      .subscribe(
        data => {
          this.loggedInUser.next(data);
          this.saveUserLocally(data);
          this.snackBar.open('Account Updated Successfully.', '', {
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

  getAllProfessionals(): BehaviorSubject<User[]> {
    this.http
      .get<User[]>('api/allProfessionals', httpOptions)
      .subscribe(professionals => {
        this.allProfessionals.next(professionals);
      });
    return this.allProfessionals;
  }

  getAllPatients(): BehaviorSubject<User[]> {
    this.http
      .get<User[]>('api/allPatients', httpOptions)
      .subscribe(patients => {
        this.allPatients.next(patients);
      });
    return this.allPatients;
  }

  requestAppointment(appt): BehaviorSubject<User> {
    // This method stringifies the date, changing the time to ZULU time
    // The offset between ZULU and Central is +5 hours
    // Converting the date back to a Date type changes the time back correctly
    console.log(JSON.stringify(appt));
    this.http
      .post<User>('api/requestAppointment', JSON.stringify(appt), httpOptions)
      .subscribe((returnedUser: User) => {
        this.loggedInUser.next(returnedUser);
        this.saveUserLocally(returnedUser);
        if (returnedUser !== null) {
          this.snackBar.open('Appointment requested!', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyle'
          });
        }
      });
    return this.loggedInUser;
  }

  cancelRequestedAppointment(appt): BehaviorSubject<User> {
    this.http
      .post<User>(
        'api/cancelRequestedAppointment',
        JSON.stringify(appt),
        httpOptions
      )
      .subscribe(returnedUser => {
        this.loggedInUser.next(returnedUser);
        this.saveUserLocally(returnedUser);
        if (returnedUser !== null) {
          this.snackBar.open('Appointment canceled!', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyle'
          });
        }
      });
    return this.loggedInUser;
  }

  cancelApprovedAppointment(appt): BehaviorSubject<User> {
    this.http
      .post<User>(
        'api/cancelApprovedAppointment',
        JSON.stringify(appt),
        httpOptions
      )
      .subscribe(returnedUser => {
        this.loggedInUser.next(returnedUser);
        this.saveUserLocally(returnedUser);
        if (returnedUser !== null) {
          this.snackBar.open('Appointment canceled!', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyle'
          });
        }
      });
    return this.loggedInUser;
  }

  approveAppointment(appt): BehaviorSubject<User> {
    this.http
      .post<User>('api/approveAppointment', JSON.stringify(appt), httpOptions)
      .subscribe(returnedUser => {
        this.loggedInUser.next(returnedUser);
        this.saveUserLocally(returnedUser);
        if (returnedUser !== null) {
          this.snackBar.open('Approved appointment!', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snackBarStyle'
          });
        }
      });
    return this.loggedInUser;
  }
}
