import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpService } from 'src/app/services/http.service';
import { MockHttpService } from 'src/app/Mocks/http-service.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        TableModule,
        CardModule],
      declarations: [DashboardComponent],
      providers: [{ provide: HttpService, useClass: MockHttpService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the state list', () => {
    expect(component.statewiseData.length).toBe(37);
  });

  it('should set the ste 25th to be true', () => {
    component.getRecord(25);
    expect(component.showStateData[25]).toBeTruthy();
  });
});
