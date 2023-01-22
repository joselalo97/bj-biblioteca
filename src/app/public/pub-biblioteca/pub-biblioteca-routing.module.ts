import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubBibliotecaComponent } from './pub-biblioteca.component';


const routes: Routes = [
  {
    path: '', component: PubBibliotecaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubBibliotecaRoutingModule { }
