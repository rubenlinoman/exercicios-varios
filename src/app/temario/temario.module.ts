import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemarioRoutingModule } from './temario-routing.module';
import { SquareComponent } from './components/square/square.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { EmptySquareComponent } from './components/emptySquare/emptySquare.component';


@NgModule({
  declarations: [
    SquareComponent,
    EmptySquareComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    TemarioRoutingModule,
    SharedModule
  ]
})
export class TemarioModule { }
