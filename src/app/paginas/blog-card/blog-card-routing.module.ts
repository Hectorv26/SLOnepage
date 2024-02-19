import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardComponent } from './blog-card.component';

const routes: Routes = [
  {
    path: '',
    component: BlogCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogCardRoutingModule { }
