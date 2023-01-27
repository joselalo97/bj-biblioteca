import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAccessComponent } from './not-access.component';

const routes: Routes = [
  {
    path: '', component: NotAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAccessRoutingModule { }
