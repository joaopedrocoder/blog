import { Component } from '@angular/core';
import { Card } from '../../../../shared/models/card.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  emphasisCard: Card = {
    id: 0,
    imgUrl: '',
    title: '',
    emphasis: false
  }

  cards: Card[] = []

  constructor(
    private homeService: HomeService
  ){}

  ngOnInit(): void {
    this.getEmphasis()
    this.listCards()
  }
  
  getEmphasis(): void {
    this.homeService.getCardEmphasis().subscribe({
      next: res => {
        if(res?.id){
          this.emphasisCard = res
        }
      },
      error: err => console.log(err)
    })
  }

  listCards(): void {
    this.homeService.getCards().subscribe({
      next: res => this.cards = res,
      error: err => console.log(err)
    })
  }

  trackByFn(index: number, card: Card): number {
    return card.id
  }
}
