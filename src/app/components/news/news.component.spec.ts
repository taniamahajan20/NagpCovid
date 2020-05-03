import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/data-service.service';
import { MockDataService } from 'src/app/Mocks/data-service.mock';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [AppRoutingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])],
      providers: [{
        provide: DataService,
        useClass: MockDataService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be able to add news', () => {
    component.addNews();
    expect(component.display).toBeTruthy();
  });
  it('should log out the user', () => {
    sessionStorage.setItem('Admin', 'true');
    component.logout();
    expect(sessionStorage.getItem('Admin')).toBe(null);
  });
});
