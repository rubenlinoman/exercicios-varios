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
  public rightTriangle: string = ''; // Triángulo rectángulo
  public invertedRightTriangle: string = ''; // Triándulo rectángulo invertido
  public equilateralTriangle: string = ''; // Triángulo equilátero
  public inverseEquilateralTriangle: string = ''; // Triángulo equilátero inverso

  constructor() {
    this.triangleForm = this.fb.group({
      altura: [''],
    });
  }

  /**
   * Método que genera un triángulo
   */
  calculateTriangle() {
    const altura = this.triangleForm.value.altura;

    // Triángulo equilátero
    this.equilateralTriangle = '';
    const base = 2 * altura - 1;
    if (altura) {
      for (let i = 0; i < altura; i++) {
        for (let j = 0; j < base; j++) {
          if (j >= altura - i - 1 && j <= altura + i - 1) {
            this.equilateralTriangle += '*';
          } else {
            this.equilateralTriangle += '&nbsp';
          }
        }
        this.equilateralTriangle += '<br>';
      }
    }

    // Triángulo equilátero inverso
    this.inverseEquilateralTriangle = '';

    if (altura) {
      for (let i = 0; i < altura; i++) {
        for (let j = 0; j < base; j++) {
          if (j >= i && j < base - i) {
            this.inverseEquilateralTriangle += '*';
          } else {
            this.inverseEquilateralTriangle += '&nbsp';
          }
        }
        this.inverseEquilateralTriangle += '<br>';
      }
    }

    // Triángulo rectángulo
    this.rightTriangle = '';
    if (altura) {
      for (let i = 0; i < altura; i++) {
        for (let j = 0; j < altura; j++) {
          if (j <= i) {
            this.rightTriangle += '*';
          }
        }
        this.rightTriangle += '<br>';
      }
    }

    // Triángulo rectçangulo invertido
    this.invertedRightTriangle = '';

    if (altura) {
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
}
