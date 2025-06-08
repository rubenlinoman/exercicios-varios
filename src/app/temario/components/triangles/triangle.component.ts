import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  standalone: false,
  templateUrl: './triangle.component.html',
  styleUrl: './triangle.component.css',
})
export class TriangleComponent {
  public fb = inject(FormBuilder);
  public triangleForm: FormGroup;
  public rightTriangle: string = '';
  public invertedRightTriangle: string = '';

  constructor() {
    this.triangleForm = this.fb.group({
      altura: [''],
    });
  }

  calculateTriangle() {
    const altura = this.triangleForm.value.altura;
    this.rightTriangle = '';
    for (let i = 0; i < altura; i++) {
      for (let j = 0; j < altura; j++) {
        if (j <= i) {
          this.rightTriangle += '*';
        }
      }
      this.rightTriangle += '<br>';
    }

    // Triángulo invertido
    this.invertedRightTriangle = '';
    for (let i = 0; i < altura; i++) {
      for (let j = altura; j > i; j--) {
        if (j >= i) {
          this.invertedRightTriangle += '*';
        }
      }
      this.invertedRightTriangle += '<br>';
    }
  }
}
