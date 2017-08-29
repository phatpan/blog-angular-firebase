import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire4';
import { AngularFireDatabaseModule } from 'angularfire4/database';
import { AngularFireAuthModule } from 'angularfire4/auth';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDmUnBCollNIj6NgKYUyP1NWEA2VDzoBpM",
  authDomain: "blog-f57be.firebaseapp.com",
  databaseURL: "https://blog-f57be.firebaseio.com",
  storageBucket: "blog-f57be.appspot.com",
  messagingSenderId: "171529233712"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

