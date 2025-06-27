import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { TriangleComponent } from './components/triangles/triangle.component';
import { SharedModule } from '../shared/shared.module';
import { SquareComponent } from './components/squares/square.component';
import { TemarioRoutingModule } from './temario-routing.module';
import { OperacionsComponent } from './components/operacions/operacions.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    TriangleComponent,
    SquareComponent,
    OperacionsComponent,
  ],
  imports: [
    CommonModule,
    TemarioRoutingModule,
    SharedModule
  ]
})
export class TemarioModule { }
