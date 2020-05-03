import { TestBed } from '@angular/core/testing';

import { DataService } from './data-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewsData } from '../models/news-data.model';
import { Observable, of } from 'rxjs';
import { checkResponse } from '../Mocks/check-response';
import { Admin } from '../models/admin.model';

describe('DataService', () => {
  let service: DataService;
  let httpSpy: any;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get', 'put', 'patch', 'post', 'delete']) }
      ],
      imports: [
        HttpClientModule
      ]
    })
      .compileComponents()
      .then(done);
  });
  beforeEach(() => {
    service = TestBed.inject(DataService);
    httpSpy = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call news endpoint', (done) => {
    const output = new NewsData();
    httpSpy.get.and.callFake((): Observable<any> => of(output));
    checkResponse(service.getNews(), output, httpSpy.get, 'api/news', done);
  });
  it('should call admin endpoint', (done) => {
    const output = new Admin();
    httpSpy.get.and.callFake((): Observable<any> => of(output));
    checkResponse(service.login(), output, httpSpy.get, 'api/admin', done);
  });
});
