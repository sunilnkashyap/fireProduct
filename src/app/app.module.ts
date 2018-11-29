import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http client module: to send request to server
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// bootstrap date picker
import { BsDatepickerModule } from 'ngx-bootstrap';

// Product Service
import { ProductService } from './services/product.service';

import { AddComponent } from './page/add/add.component';
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
