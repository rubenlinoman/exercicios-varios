import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'temario-operacions',
  standalone: false,
  templateUrl: './operacions.component.html',
  styleUrl: './operacions.component.css',
})
export class OperacionsComponent {
  public fb = inject(FormBuilder);
  public operationsForm: FormGroup;

  constructor() {
        this.operationsForm = this.fb.group({
      number: [''],
    });
  }


  calculate() {

  }
}
