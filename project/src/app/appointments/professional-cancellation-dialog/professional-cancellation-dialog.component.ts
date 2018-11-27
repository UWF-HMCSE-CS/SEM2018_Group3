import { AccountType } from './../../models/account-type.model';
import { Message } from './../../models/message.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

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
  }, private dialog: MatDialog) { }

  ngOnInit() {
    if (this.data.accountType.includes(this.accountTypes.PATIENT)) {
      this.message.from = this.data.patient;
      this.message.to = this.data.professional;
    } else {
      this.message.from = this.data.professional;
      this.message.to = this.data.patient;
    }
  }

  onSubmit() {
    this.message.dateTime = new Date();
    this.dialog.closeAll();
  }

}
