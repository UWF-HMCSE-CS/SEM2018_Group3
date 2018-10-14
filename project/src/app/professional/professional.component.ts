import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  user: { firstName: string; lastName: string } = {
    firstName: 'Oprah',
    lastName: 'Winfrey'
  };

  constructor() {}

  ngOnInit() {
  }
}
