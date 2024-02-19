import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCardRoutingModule } from './blog-card-routing.module';
import { BlogCardComponent } from './blog-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    BlogCardRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogCardModule { }
