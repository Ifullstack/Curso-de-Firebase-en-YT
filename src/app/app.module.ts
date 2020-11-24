import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDMS3-NMMQof_A0zGUUOJt6DaYO_EwOcS8",
    authDomain: "entrena-online.firebaseapp.com",
    databaseURL: "https://entrena-online.firebaseio.com",
    projectId: "entrena-online",
    storageBucket: "entrena-online.appspot.com",
    messagingSenderId: "741051845045",
    appId: "1:741051845045:web:3e0850b9b6961049d4b1fc",
    measurementId: "G-10SLEYXV0C"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
