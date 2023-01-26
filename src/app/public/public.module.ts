import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';
import { AnyModulesComponents, MatModulesComponents } from 'app/core/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatModulesComponents,
    AnyModulesComponents,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
