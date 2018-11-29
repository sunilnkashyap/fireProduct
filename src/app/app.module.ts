import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http client module: to send request to server
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// bootstrap date picker
import { BsDatepickerModule } from 'ngx-bootstrap';

// Firebase Module: main module
import { AngularFireModule } from '@angular/fire';
// Firebase database module
import { AngularFireDatabaseModule } from '@angular/fire/database';
// Firebase configuration
import { environment } from '../environments/environment';
import { AddComponent } from './page/add/add.component';

import { ProductService } from './services/product.service';
import { ListComponent } from './page/list/list.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './page/partials/footer/footer.component';
import { HeaderComponent } from './page/partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), /* Init firebase module with configuration */
    AngularFireDatabaseModule, /* Init firebase database module */
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
