import { MatDialog } from '@angular/material';
import { ProfessionalCancellationDialogComponent } from './professional-cancellation-dialog/professional-cancellation-dialog.component';
import { Appointment } from './../models/appointment.model';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccountType } from '../models/account-type.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  columns: string[] = ['Name', 'Date', 'About', 'Modify'];
  dataSourceTop;
  dataSourceBottom;
  loggedInUser: User = new User();
  allProfessionals: User[] = [];
  allPatients: User[] = [];
  accountTypes = new AccountType();
  requestedDone = false;
  approvedDone = false;
  isPatient = true;

  constructor(private data: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      if (user.type !== undefined) {
        this.loggedInUser = user;
        if (this.loggedInUser.type.includes(this.accountTypes.PATIENT)) {
          this.isPatient = true;
        } else {
          this.isPatient = false;
        }
        (this.requestedDone = false), (this.approvedDone = false);
        if (this.loggedInUser.type.includes(this.accountTypes.PATIENT)) {
          if (this.allProfessionals.length > 0) {
            this.setRequestedAppointents(this.accountTypes.PATIENT);
            this.setApprovedAppointments(this.accountTypes.PATIENT);
          }
        } else {
          if (this.allPatients.length > 0) {
            this.setRequestedAppointents('Professional');
            this.setApprovedAppointments('Professional');
          }
        }
      }
    });
    if (
      this.loggedInUser.type !== undefined &&
      this.loggedInUser.type.includes(this.accountTypes.PATIENT)
    ) {
      this.data.getAllProfessionals().subscribe(allProfs => {
        this.allProfessionals = allProfs;
        if (this.allProfessionals.length > 0) {
          this.setRequestedAppointents(this.accountTypes.PATIENT);
          this.setApprovedAppointments(this.accountTypes.PATIENT);
        }
      });
    } else {
      this.data.getAllPatients().subscribe(allPatients => {
        this.allPatients = allPatients;
        if (this.allPatients.length > 0) {
          this.setRequestedAppointents('Professional');
          this.setApprovedAppointments('Professional');
        }
      });
    }
  }

  setRequestedAppointents(type: string) {
    const requestedAppointments = [];
    if (
      type.includes(this.accountTypes.PATIENT) &&
      this.allProfessionals.length > 0 &&
      !this.requestedDone
    ) {
      this.loggedInUser.requestedAppointments.forEach(appt => {
        appt.dateTime = new Date(appt.dateTime);
        let hours = appt.dateTime.getHours();
        let timeString: string;
        if (hours > 12) {
          hours = hours - 12;
          timeString = hours.toString() + 'pm';
        } else {
          timeString = hours.toString() + 'am';
        }

        this.allProfessionals.forEach(prof => {
          if (appt.id === prof._id) {
            const requestedAppointment: {
              _id: string;
              name: { firstName: string; lastName: string };
              date: string;
              about: { text: string; bio: string };
              modify: Appointment;
            } = {
              _id: prof._id,
              name: { firstName: prof.firstName, lastName: prof.lastName },
              date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
              about: { text: 'Scroll over for bio!', bio: prof.bio },
              modify: appt
            };
            requestedAppointments.push(requestedAppointment);
          }
        });
      });
      this.requestedDone = true;
      this.dataSourceTop = requestedAppointments;
    } else if (
      !type.includes(this.accountTypes.PATIENT) &&
      this.allPatients.length > 0 &&
      !this.requestedDone
    ) {
      this.loggedInUser.requestedAppointments.forEach(appt => {
        appt.dateTime = new Date(appt.dateTime);
        let hours = appt.dateTime.getHours();
        let timeString: string;
        if (hours > 12) {
          hours = hours - 12;
          timeString = hours.toString() + 'pm';
        } else {
          timeString = hours.toString() + 'am';
        }

        this.allPatients.forEach(patient => {
          if (appt.id === patient._id) {
            const requestedAppointment: {
              _id: string;
              name: { firstName: string; lastName: string };
              date: string;
              about: { text: string; bio: string };
              modify: Appointment;
            } = {
              _id: patient._id,
              name: {
                firstName: patient.firstName,
                lastName: patient.lastName
              },
              date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
              about: { text: 'Scroll over for bio!', bio: patient.bio },
              modify: appt
            };
            requestedAppointments.push(requestedAppointment);
          }
        });
      });
      this.requestedDone = true;
      this.dataSourceTop = requestedAppointments;
    }
  }

  setApprovedAppointments(type: string) {
    const approvedAppointments = [];
    if (
      type.includes(this.accountTypes.PATIENT) &&
      this.allProfessionals.length > 0 &&
      !this.approvedDone
    ) {
      this.loggedInUser.approvedAppointments.forEach(appt => {
        appt.dateTime = new Date(appt.dateTime);
        let hours = appt.dateTime.getHours();
        let timeString: string;
        if (hours > 12) {
          hours = hours - 12;
          timeString = hours.toString() + 'pm';
        } else {
          timeString = hours.toString() + 'am';
        }

        this.allProfessionals.forEach(prof => {
          if (appt.id === prof._id) {
            const approvedAppointment: {
              _id: string;
              name: { firstName: string; lastName: string };
              date: string;
              about: { text: string; bio: string };
              modify: Appointment;
            } = {
              _id: prof._id,
              name: { firstName: prof.firstName, lastName: prof.lastName },
              date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
              about: { text: 'Scroll over for bio!', bio: prof.bio },
              modify: appt
            };
            approvedAppointments.push(approvedAppointment);
          }
        });
      });
      this.approvedDone = true;
      this.dataSourceBottom = approvedAppointments;
    } else if (
      !type.includes(this.accountTypes.PATIENT) &&
      this.allPatients.length > 0 &&
      !this.approvedDone
    ) {
      this.loggedInUser.approvedAppointments.forEach(appt => {
        appt.dateTime = new Date(appt.dateTime);
        let hours = appt.dateTime.getHours();
        let timeString: string;
        if (hours > 12) {
          hours = hours - 12;
          timeString = hours.toString() + 'pm';
        } else {
          timeString = hours.toString() + 'am';
        }

        this.allPatients.forEach(patient => {
          if (appt.id === patient._id) {
            const approvedAppointment: {
              _id: string;
              name: { firstName: string; lastName: string };
              date: string;
              about: { text: string; bio: string };
              modify: Appointment;
            } = {
              _id: patient._id,
              name: {
                firstName: patient.firstName,
                lastName: patient.lastName
              },
              date: appt.dateTime.toLocaleDateString() + ' at ' + timeString,
              about: { text: 'Scroll over for bio!', bio: patient.bio },
              modify: appt
            };
            approvedAppointments.push(approvedAppointment);
          }
        });
      });
      this.approvedDone = true;
      this.dataSourceBottom = approvedAppointments;
    }
  }

  updateAppointment(
    appt: Appointment,
    approval: boolean,
    fromApprovedList: boolean
  ) {
    const appointmentToUpdate: {
      patient: string;
      professional: string;
      date: Date;
      accountType: string;
    } = { patient: '', professional: '', date: new Date(), accountType: '' };
    if (this.loggedInUser.type.includes(this.accountTypes.PATIENT)) {
      appointmentToUpdate.patient = this.loggedInUser._id;
      appointmentToUpdate.professional = appt.id;
      appointmentToUpdate.date = new Date(appt.dateTime);
      appointmentToUpdate.accountType = this.loggedInUser.type;
    } else {
      appointmentToUpdate.patient = appt.id;
      appointmentToUpdate.professional = this.loggedInUser._id;
      appointmentToUpdate.date = new Date(appt.dateTime);
      appointmentToUpdate.accountType = this.loggedInUser.type;
    }

    if (approval) {
      this.data.approveAppointment(appointmentToUpdate);
    } else {
      const dialogRef = this.dialog.open(ProfessionalCancellationDialogComponent, {
        width: '500px',
        height: '310px',
        data: appointmentToUpdate,
      });

      dialogRef.afterClosed().subscribe(result => {
        if (dialogRef.componentInstance.message.text.length >= 20) {
          if (fromApprovedList) {
            this.data.cancelApprovedAppointment(appointmentToUpdate);
          } else {
            this.data.cancelRequestedAppointment(appointmentToUpdate);
          }
          this.data.sendMessage(dialogRef.componentInstance.message);
        }
      });
    }
  }
}
