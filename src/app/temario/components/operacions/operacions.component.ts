import { Component } from '@angular/core';

@Component({
  selector: 'temario-operacions',
  standalone: false,
  templateUrl: './operacions.component.html',
  styleUrl: './operacions.component.css',
})
export class OperacionsComponent {
  public saludo: string = 'Ola mundo';
  public flag: boolean = false;

  public users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'Ana Gómez', email: 'ana@example.com' },
    { id: 3, name: 'Luis Martínez', email: 'luis@example.com' },
  ];
}
