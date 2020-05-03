import { HttpService } from './http.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('HttpService', () => {
  let service: HttpService;
  let httpSpy: any;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
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
    service = TestBed.inject(HttpService);
    httpSpy = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have defined properties', () => {
    expect(service.getCovidDateWiseData).toEqual(jasmine.any(Function));
    expect(service.getDistrictWiseData).toEqual(jasmine.any(Function));
  });
});
