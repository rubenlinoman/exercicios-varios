import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

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

      for (let i = 0; i < lados; i++) {
        for (let j = 0; j < lados; j++) {
          this.square += '*';
        }
        this.square += '<br>';
      }
    }
  }
}
