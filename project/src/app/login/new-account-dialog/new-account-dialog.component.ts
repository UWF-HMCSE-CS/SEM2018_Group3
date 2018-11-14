import { AccountType } from './../../models/account-type.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-new-account-dialog',
  templateUrl: './new-account-dialog.component.html',
  styleUrls: ['./new-account-dialog.component.css']
})
export class NewAccountDialogComponent implements OnInit {
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
    this.data.createNewAccount(this.form.value);
    console.log(this.form.value);
    // Take user back to login page
    this.router.navigateByUrl('/login');
  }
}
