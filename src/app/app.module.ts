import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDatepickerModule } from 'ngx-bootstrap';

// Firebase Module: main module
import { AngularFireModule } from '@angular/fire';
// Firebase database module
import { AngularFireDatabaseModule } from '@angular/fire/database';
// Firebase configuration
import { environment } from '../environments/environment';
import { AddComponent } from './page/add/add.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), /* Init firebase module with configuration */
    AngularFireDatabaseModule, /* Init firebase database module */
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
