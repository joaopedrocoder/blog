import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  article: Article = {
    id: 0,
    title: '',
    imgUrl: '',
    news: ''
  }
  id: string | null = ''

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getIdFromRoute()
    this.getArticle()
  }
  
  getIdFromRoute(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id')
    })
  }

  getArticle(): void {
    this.homeService.getArticleById(Number(this.id)).subscribe({
      next: res => this.article = res,
      error: err => console.log(err)
    })
  }
}
