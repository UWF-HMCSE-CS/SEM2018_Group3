import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../data.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loggedInUser = new User();
  @Output() closeMe = new EventEmitter<boolean>();

  constructor(
    private data: DataService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    this.data.login(form.value.email, form.value.password).subscribe(user => {
      if (user === null) {
        user = new User();
        user.email = form.value.email;
        this.snackBar.open('Password incorrect or account not found.', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'snackBarStyle'
        });
      } else if (user.type !== undefined) {
        user = user;
        if (user.type.includes('Patient')) {
          this.router.navigateByUrl('/user');
        } else {
          this.router.navigateByUrl('/professional');
        }
        this.dialog.closeAll();
      }
    });
  }
}
