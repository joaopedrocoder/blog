import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';



@NgModule({
  declarations: [
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
  ],
  exports: [ 
    TitleComponent, 
    BigCardComponent, 
    SmallCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
