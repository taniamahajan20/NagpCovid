import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NewsData } from '../models/news-data.model';
import { tap } from 'rxjs/operators';
import { Admin } from '../models/admin.model';

@Injectable()
export class DataService {
  SERVER_URL = 'api/news';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  constructor(private http: HttpClient) { }

  public getNews() {
    return this.http.get<NewsData[]>(this.SERVER_URL).pipe(
      tap(data => console.log(data))
    );
  }
  public login() {
    return this.http.get<Admin>('api/admin').pipe(
      tap()
    );
  }

  public postNews(news: NewsData) {
    return this.http.post<NewsData>(this.SERVER_URL, news, this.httpOptions);
  }
}
