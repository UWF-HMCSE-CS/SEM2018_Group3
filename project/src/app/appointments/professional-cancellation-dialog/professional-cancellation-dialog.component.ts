import { AccountType } from './../../models/account-type.model';
import { Message } from './../../models/message.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-professional-cancellation-dialog',
  templateUrl: './professional-cancellation-dialog.component.html',
  styleUrls: ['./professional-cancellation-dialog.component.scss']
})
export class ProfessionalCancellationDialogComponent implements OnInit {
  message = new Message();
  accountTypes = new AccountType();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    patient: string;
    professional: string;
    date: Date;
    accountType: string;
  }, private dialog: MatDialog, private siteData: DataService) { }

  ngOnInit() {
    if (this.data.accountType.includes(this.accountTypes.PATIENT)) {
      this.message.from = this.data.patient;
      this.message.to = this.data.professional;
      this.message.conversationWithId = this.data.professional;
    } else {
      this.message.from = this.data.professional;
      this.message.to = this.data.patient;
      this.message.conversationWithId = this.data.patient;
    }
    this.siteData.getNameByID(this.message.conversationWithId).subscribe(name => {
      if (name[0] !== null && name[0] !== undefined) {
        this.message.conversationWithFirstName = name[0].firstName;
        this.message.conversationWithLastName = name[0].lastName;
      }
    });
  }

  clearMesssage() {
    this.message.text = '';
  }

  onSubmit() {
    this.message.dateTime = new Date();
    this.message.read = false;
    this.dialog.closeAll();
  }

}
