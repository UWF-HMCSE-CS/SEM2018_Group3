import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  })
};

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  patientOrProfessional = 'patient';
  professionalTypes: string[] = [
    'Psychologist',
    'Therapist',
    'Psychiatrist',
    'Counselor',
    'Social Worker'
  ];
  professionalTypeSelected = '';
  @ViewChild('f')
  form: NgForm;
  @ViewChild('select')
  select;
  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.http
      .put('api/newAccount', JSON.stringify(this.form.value), httpOptions)
      .subscribe(
        data => {
          console.log(data);
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
    const formSubmission = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      address: this.form.value.address,
      email: this.form.value.email,
      password: this.form.value.password,
      type: this.form.value.patientOrProfessional
    };
    if (this.form.value.patientOrProfessional.includes('professional')) {
      formSubmission.type = this.form.value.type;
    }

    // Take user back to login page
    this.router.navigateByUrl('/login');
  }
}
