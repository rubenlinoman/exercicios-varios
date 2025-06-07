import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emptySquare',
  templateUrl: './emptySquare.component.html',
  styleUrls: ['./emptySquare.component.css']
})
export class EmptySquareComponent {

  public fb = inject(FormBuilder);
  public ladosForm: FormGroup;
  public square: string = '';

  constructor() {
    this.ladosForm = this.fb.group({
      lados: ['']
    });
  }

  calculateSquare() {
    const lados = this.ladosForm.value.lados;
    this.square = '';
    if (lados) {

      for (let f = 0; f < lados; f++) {
        for (let c = 0; c < lados; c++) {
          if (f == 0 || f == lados-1) { // Se e é a primeria ou a última
            this.square += '*';
          } else {
            if (c == 0 || c == lados-1) {
              this.square += '*';
            } else {
              this.square += '&nbsp&nbsp';
            }
          }
        }
        this.square += '<br>';
      }
    }
  }
}
