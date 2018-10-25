import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  user = new User();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      this.user = user;
    });
  }
}
