import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccountType } from '../models/account-type.model';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  user = new User();

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.data.getLoggedInUser().subscribe(user => {
      this.user = user;
      if (this.user.email === undefined) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  logout() {
    this.data.logout();
  }
}
