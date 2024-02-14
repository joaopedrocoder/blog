import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './pages/content/content.component';



@NgModule({
  declarations: [ 
    HomePageComponent, 
    ContentComponent 
  ],
  exports: [ 
    HomePageComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
