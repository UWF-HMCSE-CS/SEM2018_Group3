import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  user: { firstName: string; lastName: string } = {
    firstName: 'Tony',
    lastName: 'Stark'
  };

  constructor() {}

  ngOnInit() {}
}
