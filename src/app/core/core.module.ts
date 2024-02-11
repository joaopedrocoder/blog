import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    MenuBarComponent
  ],
  exports: [ MenuBarComponent ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
