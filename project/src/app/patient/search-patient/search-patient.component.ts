import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {
  today = new Date();
  chosenDateAndTime: Date;
  chosenProf: {
    _id: string;
    name: { firstName: string; lastName: string };
    type: string;
    about: { text: string; bio: string };
    availability: string;
  };
  appointmentTimes: { time: string; hour: number; disabled: boolean }[] = [
    {
      time: '9:00am - 9:45am',
      hour: 9,
      disabled: false
    },
    {
      time: '10:00am - 10:45am',
      hour: 10,
      disabled: false
    },
    {
      time: '11:00am - 11:45am',
      hour: 11,
      disabled: false
    },
    {
      time: '1:00pm - 1:45pm',
      hour: 13,
      disabled: false
    },
    {
      time: '2:00pm - 2:45pm',
      hour: 14,
      disabled: false
    },
    {
      time: '3:00pm - 3:45pm',
      hour: 15,
      disabled: false
    },
    {
      time: '4:00pm - 4:45pm',
      hour: 16,
      disabled: false
    }
  ];
  columns: string[] = ['Name', 'Type', 'About', 'Availability'];
  dataSource;
  loggedInUser: User;
  weekendFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;
    });
    this.today.setDate(this.today.getDate() + 1);
    this.data.getAllProfessionals().subscribe(professionals => {
      const profArray = [];
      if (professionals) {
        professionals.forEach(prof => {
          const newProf: {
            _id: string;
            name: { firstName: string; lastName: string };
            type: string;
            about: { text: string; bio: string };
            availability: string;
          } = {
            _id: prof._id,
            name: { firstName: prof.firstName, lastName: prof.lastName },
            type: prof.type,
            about: { text: 'Scroll over for bio!', bio: prof.bio },
            availability: 'Click to select a date and time.'
          };
          profArray.push(newProf);
        });
      }

      this.dataSource = profArray;
    });
  }

  assignDate(date) {
    this.chosenDateAndTime = date;
  }

  chooseProfessional(prof) {
    this.chosenProf = prof;
  }

  backToProfessionalsTable() {
    this.chosenProf = undefined;
  }

  assignTime(hour) {
    this.chosenDateAndTime.setHours(hour);
  }

  requestAppointment() {
    const appt = {
      patient: this.loggedInUser._id,
      professional: this.chosenProf._id,
      appointment: this.chosenDateAndTime
    };
    this.data.updateUserLocally(this.loggedInUser);
    this.data.requestAppointment(appt).subscribe(user => {
      if (user !== null) {
        this.chosenDateAndTime = undefined;
        this.chosenProf = undefined;
      }
    });
  }
}
