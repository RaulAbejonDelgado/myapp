import { Pipe, PipeTransform } from '@angular/core';
import { Videojuego } from '../model/videojuego';

@Pipe({
  name: 'alquilado'
})
export class VideojuegoPipe implements PipeTransform {

  transform(videojuegos: Videojuego[], alquilado: boolean): any {
    console.debug('VideojuegoPipe transform');
    /* const resul: Videojuego[] = [];

    for (let v of videojuegos) {

      if (v.alquilado === alquilado) {
        resul.push(v);
      }
    }
    return resul; */
    return videojuegos.filter(v => v.alquilado === alquilado);
  }
}