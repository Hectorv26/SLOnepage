import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './modelos.component';

const routes: Routes = [
  {
    path: '',
    component: ModelosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelosRoutingModule { }
