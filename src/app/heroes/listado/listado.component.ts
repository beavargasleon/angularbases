import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  public heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Capitan América',
    'Hulk',
    'Hawkeye',
  ];

  public heroeBorrado : string = '';

  constructor() {}

  ngOnInit(): void {}

  borrarHeroe() {
    const heroeBorrado =this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
