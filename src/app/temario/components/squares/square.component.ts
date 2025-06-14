import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  standalone: false,
})
export class SquareComponent {
  public fb = inject(FormBuilder);
  public lonxitudeLadoForm: FormGroup;
  public square: string = '';
  public emptySquare: string = '';

  constructor() {
    this.lonxitudeLadoForm = this.fb.group({
      lonxitudeLado: [''],
    });
  }

  calculateSquare() {
    const lonxitudeLado: number = this.lonxitudeLadoForm.value.lonxitudeLado;
    this.square = '';

    // Cadrado recheo
    if (lonxitudeLado) {
      for (let i = 0; i < lonxitudeLado; i++) {
        for (let j = 0; j < lonxitudeLado; j++) {
          this.square += '*';
        }
        this.square += '<br>';
      }
    }

    // Cadrado baleiro
    if (lonxitudeLado) {
      for (let f = 0; f < lonxitudeLado; f++) {
        for (let c = 0; c < lonxitudeLado; c++) {
          if (f == 0 || f == lonxitudeLado - 1) {
            // Se e é a primeria ou a última
            this.emptySquare += '*';
          } else {
            if (c == 0 || c == lonxitudeLado - 1) {
              this.emptySquare += '*';
            } else {
              this.emptySquare += '&nbsp';
            }
          }
        }
        this.emptySquare += '<br>';
      }
    }
  }
}
