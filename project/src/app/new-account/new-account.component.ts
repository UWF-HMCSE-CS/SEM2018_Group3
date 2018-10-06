import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  patientOrProfessional = 'patient';
  professionalTypes: string[] = ['Psychologist',
    'Therapist',
    'Psychiatrist',
    'Counselor',
    'Social Worker'];
  professionalTypeSelected = '';
  @ViewChild('f') form: NgForm;
  @ViewChild('select') select;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('new account submitted');
    console.log(this.form);
    const formSubmission = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      address: this.form.value.address,
      email: this.form.value.email,
      password: this.form.value.password,
      type: this.form.value.patientOrProfessional,
    }
    if (this.form.value.patientOrProfessional.includes('professional')) {
      formSubmission.type = this.form.value.type;
    }
    console.log(formSubmission);

    // Take user back to login page
    this.router.navigateByUrl('/login');
  }

}
