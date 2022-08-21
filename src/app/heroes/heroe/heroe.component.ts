import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  get nombreCapitalizado() {
    return this.nombre.toLocaleUpperCase();
  }

  public obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre(): void {
    if (this.nombre === 'Ironman') {
      this.nombre = 'Spiderman';
    } else if (this.nombre === 'Spiderman') {
      this.nombre = 'Ironman';
    }
  }
  public cambiarEdad(): void {
    if (this.edad === 45) {
      this.edad = 30;
    } else if (this.edad === 30) {
      this.edad = 45;
    }
  }
}
