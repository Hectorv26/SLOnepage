import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolucionesRoutingModule } from './soluciones-routing.module';
import { SolucionesComponent } from './soluciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SolucionesComponent
  ],
  imports: [
    CommonModule,
    SolucionesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SolucionesModule { }
