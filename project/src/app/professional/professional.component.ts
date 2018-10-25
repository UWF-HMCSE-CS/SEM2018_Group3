import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  user = new User();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      this.user = user;
    });
  }
}
