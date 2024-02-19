import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelosRoutingModule } from './modelos-routing.module';
import { ModelosComponent } from './modelos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ModelosComponent
  ],
  imports: [
    CommonModule,
    ModelosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModelosModule { }
