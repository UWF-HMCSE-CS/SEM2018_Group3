import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatMenuModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTabsModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { ProfessionalComponent } from './professional/professional.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faNotesMedical,
  faUser,
  faArrowLeft,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { SearchPatientComponent } from './patient/search-patient/search-patient.component';
import { ProfilePatientComponent } from './patient/profile-patient/profile-patient.component';
import { ProfileProfessionalComponent } from './professional/profile-professional/profile-professional.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { NewAccountDialogComponent } from './login/new-account-dialog/new-account-dialog.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import {
  ProfessionalCancellationDialogComponent
} from './appointments/professional-cancellation-dialog/professional-cancellation-dialog.component';
import { MessagesDialogComponent } from './messages-dialog/messages-dialog.component';

library.add(faNotesMedical, faUser, faAngleLeft);

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: PatientComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  /*   { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientComponent,
    ProfessionalComponent,
    HeaderComponent,
    SearchPatientComponent,
    ProfilePatientComponent,
    ProfileProfessionalComponent,
    AboutUsComponent,
    LoginDialogComponent,
    NewAccountDialogComponent,
    AppointmentsComponent,
    ProfessionalCancellationDialogComponent,
    MessagesDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  entryComponents: [LoginDialogComponent, NewAccountDialogComponent, ProfessionalCancellationDialogComponent, MessagesDialogComponent],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
