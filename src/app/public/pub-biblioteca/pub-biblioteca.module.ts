import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubBibliotecaComponent } from './pub-biblioteca.component';
import { PublicRoutingModule } from '../public-routing.module';


@NgModule({
  declarations: [
    PubBibliotecaComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PubHistorialModule { }
