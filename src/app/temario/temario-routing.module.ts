import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquareComponent } from './components/squares/square.component';
import { TriangleComponent } from './components/triangles/triangle.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'square', component: SquareComponent },
      { path: 'triangle', component: TriangleComponent },
      { path: '**', redirectTo: 'square' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemarioRoutingModule { }
