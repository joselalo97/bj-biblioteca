import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTokenGuard } from './guards/check-token.guard';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
    canActivate: [CheckTokenGuard],
    canLoad: [CheckTokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
