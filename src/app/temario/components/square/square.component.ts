import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css'],
    standalone: false
})
export class SquareComponent {

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

      for (let i = 0; i < lonxitudeLado; i++) {
        for (let j = 0; j < lonxitudeLado; j++) {
          this.square += '*';
        }
        this.square += '<br>';
      }
    }
  }
}
