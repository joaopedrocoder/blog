import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { BigCardComponent } from './components/big-card/big-card.component';



@NgModule({
  declarations: [
    TitleComponent,
    BigCardComponent
  ],
  exports: [ TitleComponent, BigCardComponent ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
