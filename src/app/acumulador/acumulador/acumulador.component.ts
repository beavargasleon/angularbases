import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(base * -1)">- {{ base }}</button>
  `,
})
export class AcumuladorComponent {
  public titulo: string = 'Acumulador App';

  public numero: number = 10;

  public base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
