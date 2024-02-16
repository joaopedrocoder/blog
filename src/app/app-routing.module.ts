import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ContentComponent } from './modules/home/pages/content/content.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'content/:id', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
