import { AccountType } from './../../models/account-type.model';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-profile-professional',
  templateUrl: './profile-professional.component.html',
  styleUrls: ['./profile-professional.component.css']
})
export class ProfileProfessionalComponent implements OnInit {
  loggedInUser = new User();
  originalEmail: string;
  professionalTypes: string[] = new AccountType().getAllTypesArray();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      if (user.firstName !== undefined) {
        this.loggedInUser = user;
        this.originalEmail = this.loggedInUser.email;
      }
    });
  }

  onSubmit() {
    this.data
      .updateUser(this.originalEmail, this.loggedInUser)
      .subscribe(updatedUser => {
        this.loggedInUser = updatedUser;
      });
  }
}
