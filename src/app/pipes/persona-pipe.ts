import { Persona, Sexo } from './../model/persona';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'sexo'
})
export class PersonaPipe implements PipeTransform {

  

    transform(personas: Persona[], sexo: Sexo ): any {
      console.debug('PersonaPipe transform');
      const resultado: Persona[] = [];
      personas.forEach(el => {
        if (el.Sexo === sexo) {
          resultado.push(el);
        }
      });
      return resultado;
    }
  
  }

