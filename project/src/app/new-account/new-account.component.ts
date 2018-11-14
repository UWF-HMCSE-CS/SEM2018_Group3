import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AccountType } from '../models/account-type.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  accountTypes = new AccountType();
  patientOrProfessional = this.accountTypes.PATIENT;
  professionalTypes: string[] = this.accountTypes.getProfessionalTypesArray();
  professionalTypeSelected = '';
  @ViewChild('f')
  form: NgForm;
  @ViewChild('select')
  select;
  constructor(private router: Router, private data: DataService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);
    const newUser = new User();
    newUser.firstName = this.form.value.firstName;
    newUser.lastName = this.form.value.lastName;
    newUser.address = this.form.value.address;
    newUser.email = this.form.value.email;
    newUser.password = this.form.value.password;
    if (this.patientOrProfessional.includes(this.accountTypes.PATIENT)) {
      newUser.type = this.patientOrProfessional;
    } else {
      newUser.type = this.form.value.type;
    }
    this.data.createNewAccount(newUser);
  }

  printForm() {
    console.log(this.form.value);
  }
}
