import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    //cojemos el valor que entra y lo ponemos en minusculas
    value = value.toLowerCase();
    //separamos el string entre las posibles palabras que lo compongan
    let nombres = value.split(" ");
    //recorremos cara elemento del array
    for (let i in nombres){
      //cojemos la primera letra de cada elemento del array la ponemos en mayuscula
      //y lo completamos con el resto del array menos el primer caracter que este ya esta capitalizado por el touppercase
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
    }
    return nombres.join(" ");
}

}
