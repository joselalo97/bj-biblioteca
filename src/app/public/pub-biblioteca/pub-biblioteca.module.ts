import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubBibliotecaComponent } from './pub-biblioteca.component';
import { PubBibliotecaRoutingModule } from './pub-biblioteca-routing.module';
import { AnyModulesComponents, MatModulesComponents } from 'app/core/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PubBibliotecaComponent,
  ],
  imports: [
    CommonModule,
    PubBibliotecaRoutingModule,
    MatModulesComponents,
    AnyModulesComponents,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PubBibliotecaModule { }
