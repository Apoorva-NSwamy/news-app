import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'https://newsapi.org/v2';
const apiUrl = {
  SOURCES: `${API_ENDPOINT}/sources`,
  HEADLINES: `${API_ENDPOINT}/top-headlines`,
};
@Injectable({
  providedIn: 'root'
})

export class NewsAppService {
  apiKey = '52155086836e42e0a37080faad79ee3e';

  constructor(private http: HttpClient) { }
  initSources(){
     return this.http.get(`${apiUrl.SOURCES}?language=en&apiKey=${this.apiKey}`);
  }
  initArticles(){
   return this.http.get(`${apiUrl.HEADLINES}?sources=techcrunch&apiKey=${this.apiKey}`);
  }
  getArticlesByID(source: string){
   return this.http.get(`${apiUrl.HEADLINES}?sources=${source}&apiKey=${this.apiKey}`);
  }
}
