import { DataService } from './../../data.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AccountType } from '../../models/account-type.model';
import { MatDialog } from '@angular/material';
import { MessagesDialogComponent } from '../../messages-dialog/messages-dialog.component';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  loggedInUser = new User();
  originalEmail: string;
  professionalTypes: string[] = new AccountType().getAllTypesArray();

  constructor(private data: DataService, private dialog: MatDialog) { }

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

  showMessagesDialog() {
    console.log('show messages');
    const dialogRef = this.dialog.open(MessagesDialogComponent, {
      width: '500px',
      height: '310px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
