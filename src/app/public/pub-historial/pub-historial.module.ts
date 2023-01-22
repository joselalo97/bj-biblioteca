import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubHistorialRoutingModule } from './pub-historial-routing.module';
import { PubHistorialComponent } from './pub-historial.component';


@NgModule({
  declarations: [
    PubHistorialComponent
  ],
  imports: [
    CommonModule,
    PubHistorialRoutingModule
  ]
})
export class PubHistorialModule { }
