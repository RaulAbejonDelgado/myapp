import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../model/tarea';

@Pipe({
  name: 'tareaTerminado'
})
export class TareaTerminadoPipe implements PipeTransform {

  transform(tareas: Tarea[], terminado: boolean): any {
    console.debug('TareaTerminadoPipe transform');
    return tareas.filter(t => t.terminado === terminado);
  }

}
