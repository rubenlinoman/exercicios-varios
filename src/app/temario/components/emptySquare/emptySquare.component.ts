import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-emptySquare',
    templateUrl: './emptySquare.component.html',
    styleUrls: ['./emptySquare.component.css'],
    standalone: false
})
export class EmptySquareComponent {

  public fb = inject(FormBuilder);
  public lonxitudeLadoForm: FormGroup;
  public square: string = '';

  constructor() {
    this.lonxitudeLadoForm = this.fb.group({
      lonxitudeLado: ['']
    });
  }

  calculateSquare() {
    const lonxitudeLado = this.lonxitudeLadoForm.value.lonxitudeLado;
    this.square = '';
    if (lonxitudeLado) {

      for (let f = 0; f < lonxitudeLado; f++) {
        for (let c = 0; c < lonxitudeLado; c++) {
          if (f == 0 || f == lonxitudeLado-1) { // Se e é a primeria ou a última
            this.square += '*';
          } else {
            if (c == 0 || c == lonxitudeLado-1) {
              this.square += '*';
            } else {
              this.square += '&nbsp';
            }
          }
        }
        this.square += '<br>';
      }
    }
  }
}
