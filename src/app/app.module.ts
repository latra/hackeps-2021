// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// MDBBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { environment } from '../environments/environment';

import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './home/banner/login/login.component';
import { FaqsComponent } from './home/faqs/faqs.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { LoadingOverlayComponent } from './shared/loading-overlay/loading-overlay.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    // LoginComponent
    FaqsComponent,
    SponsorsComponent,
    CalendarComponent,
    LoadingOverlayComponent,
    UserProfileComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    // Bootstrap
    MDBBootstrapModule.forRoot(),

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
