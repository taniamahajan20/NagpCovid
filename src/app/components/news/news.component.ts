import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { Admin } from 'src/app/models/admin.model';
import { NewsData } from 'src/app/models/news-data.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  isAdmin = false;
  news: NewsData[];
  display = false;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    if (sessionStorage.getItem('Admin') === 'true') {
      this.isAdmin = true;
    }
    this.updateNews();
  }

  addNews() {
    this.display = true;
  }

  updateNews() {
    this.dataService.getNews().subscribe((res) => {
      this.news = res;
    });
    this.display = false;
  }

  public logout() {
    sessionStorage.removeItem('Admin');
    this.isAdmin = false;
  }

}
