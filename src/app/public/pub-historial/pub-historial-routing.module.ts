import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubHistorialComponent } from './pub-historial.component';

const routes: Routes = [
  {
    path: '', component: PubHistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubHistorialRoutingModule { }
