import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateBulletinComponent } from './components/state-bulletin/state-bulletin.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PrecautionsComponent } from './components/precautions/precautions.component';
import { NewsComponent } from './components/news/news.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DataService } from './services/data-service.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StateBulletinComponent,
    PrecautionsComponent,
    NewsComponent,
    LoginComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
    HttpClientInMemoryWebApiModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true
    }),
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [HttpService, InMemoryDataService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [StateBulletinComponent, AddNewsComponent]
})
export class AppModule { }
