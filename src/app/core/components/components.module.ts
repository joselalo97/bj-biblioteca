import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnyModulesComponents } from './any-modules-components';
import { NgbModulesComponents } from './ngb-modules-component';
import { MatModulesComponents } from './mat-modules-components';
import { ToggleScrollComponent } from './toggle-scroll/toggle-scroll.component';
import { LoaderComponent } from './loader/loader.component';


const Components: any[] = [
  LoaderComponent,
  ToggleScrollComponent
];

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatModulesComponents,
    NgbModulesComponents,
    AnyModulesComponents,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Components,
    NgbModulesComponents,
    AnyModulesComponents,
    MatModulesComponents
  ],
})
export class ComponentsModule { }
