import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('new account submitted');
    console.log(this.form);
    console.log(this.professionalTypeSelected);
    if (this.form.value.patientOrProfessional.includes('professional')) {
      console.log(this.select.value);
    }

  }

}
