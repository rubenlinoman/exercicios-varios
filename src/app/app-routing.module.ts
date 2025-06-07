import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'temario', loadChildren: () => import('./temario/temario.module').then(m => m.TemarioModule) },
  {
    path: '',
    loadChildren: () => import('./temario/temario.module').then(m => m.TemarioModule)
  },
  {
    path: '**',
    loadChildren: () => import('./temario/temario.module').then(m => m.TemarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
