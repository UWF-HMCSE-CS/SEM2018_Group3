import { DataService } from './../../data.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AccountType } from '../../models/account-type.model';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  loggedInUser = new User();
  originalEmail: string;
  professionalTypes: string[] = new AccountType().getAllTypesArray();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      if (user.firstName !== undefined) {
        this.loggedInUser = user;
        this.originalEmail = this.loggedInUser.email;
      }
    });
  }

  onSubmit() {
    console.log(this.loggedInUser);
    this.data
      .updateUser(this.originalEmail, this.loggedInUser)
      .subscribe(updatedUser => {
        this.loggedInUser = updatedUser;
      });
  }
}
