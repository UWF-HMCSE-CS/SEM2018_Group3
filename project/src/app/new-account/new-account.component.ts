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
  patientOrProfessional = 'patient';
  professionalTypes: string[] = new AccountType().getProfessionalTypesArray();
  professionalTypeSelected = '';
  @ViewChild('f')
  form: NgForm;
  @ViewChild('select')
  select;
  constructor(private router: Router, private data: DataService) {}

  ngOnInit() {}

  onSubmit() {
    this.data.createNewAccount(this.form.value).subscribe(user => {});

    // Take user back to login page
    this.router.navigateByUrl('/login');
  }

  printForm() {
    console.log(this.form.value);
  }
}
