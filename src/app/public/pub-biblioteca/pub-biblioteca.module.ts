import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubBibliotecaComponent } from './pub-biblioteca.component';
import { PubBibliotecaRoutingModule } from './pub-biblioteca-routing.module';


@NgModule({
  declarations: [
    PubBibliotecaComponent
  ],
  imports: [
    CommonModule,
    PubBibliotecaRoutingModule
  ]
})
export class PubBibliotecaModule { }
