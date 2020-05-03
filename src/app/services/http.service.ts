import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  public getCovidDateWiseData() {
    return this.http.get('https://api.covid19india.org/data.json');
  }

  public getDistrictWiseData() {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }
}
