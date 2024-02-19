import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolucionesComponent } from './soluciones.component';

const routes: Routes = [
  {
    path: '',
    component: SolucionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolucionesRoutingModule { }
