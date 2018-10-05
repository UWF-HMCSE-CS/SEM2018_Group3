import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { ProfessionalComponent } from './professional/professional.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'newAccount', component: NewAccountComponent },
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
    NewAccountComponent
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
