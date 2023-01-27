import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAccessRoutingModule } from './not-access-routing.module';
import { NotAccessComponent } from './not-access.component';
import { MatModulesComponents } from 'app/core/components';


@NgModule({
  declarations: [
    NotAccessComponent
  ],
  imports: [
    CommonModule,
    NotAccessRoutingModule,
    MatModulesComponents
  ]
})
export class NotAccessModule { }
