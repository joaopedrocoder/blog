import { Card } from './../../../shared/models/card.model';
import { environment } from './../../../../environments/environment.development';
import { Article } from './../models/article.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCardEmphasis(): Observable<Card | undefined> {
    return this.http.get<Card[]>(`${this.url}cards`).pipe(
      map(data => data.find(card => card.emphasis)),
    ) 
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.url}cards`).pipe(
      map(data => data.filter(item => !item.emphasis))
    )
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}articles/${id}`)
  }
}
