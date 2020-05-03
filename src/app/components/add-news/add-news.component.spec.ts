import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsComponent } from './add-news.component';
import { DataService } from 'src/app/services/data-service.service';
import { MockDataService } from 'src/app/Mocks/data-service.mock';
import { HttpClientModule } from '@angular/common/http';
import { NewsData } from 'src/app/models/news-data.model';
import { of } from 'rxjs';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: DataService, useClass: MockDataService }],
      declarations: [AddNewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form to be defined', () => {
    expect(component.newsForm).toBeDefined();
  });

  it('should post the news', () => {
    const news = new NewsData();
    const dataService = TestBed.inject(DataService);
    spyOn(dataService, 'postNews').and.callFake(() => {
      return of(news);
    });
    component.onSubmit();
    expect(dataService.postNews).toHaveBeenCalled();
  });
});
