import { Component, OnInit } from '@angular/core';
import { NewsAppService } from 'src/app/services/news-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainArticles: Array<any>;
  mainSources: Array<any>;
  constructor(private newsApi: NewsAppService) { }

  ngOnInit(): void {
    this.getArticles();
    this.getSources();
  }

  getArticles() {
     // load articles
     this.newsApi.initArticles().subscribe(data => this.mainArticles = data[`articles`]);
  }

  getSources() {
    // load news sources
    this.newsApi.initSources().subscribe(data => this.mainSources = data[`sources`]);
  }

  searchArticles(source: string){
    this.newsApi.getArticlesByID(source).subscribe(data => this.mainArticles = data[`articles`]);
  }
}
