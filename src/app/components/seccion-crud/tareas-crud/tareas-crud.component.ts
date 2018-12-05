import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareaService } from 'src/app/providers/tarea.service';


@Component({
  selector: 'app-tareas-crud',
  templateUrl: './tareas-crud.component.html',
  styleUrls: ['./tareas-crud.component.scss']
})
export class TareasCrudComponent implements OnInit {

  tareas: Tarea[];
  mostrarTodasTareas: boolean;
  tareaNueva: Tarea;
  nueva: string;

  constructor(public tareaService: TareaService, ){
    console.trace('TareasCrudComponent - constructor');
    this.tareas = [];
    this.mostrarTodasTareas = true;
    this.nueva = "";
  }
  ngOnInit() {
    this.recargarLista();
  }

  recargarLista(){
    this.tareaService.getAll().subscribe(data =>{
      console.debug('datos recividos %o', data);
      this.tareas = data.map(el => el)
    })
  }

  nuevaTarea(){
    console.trace('TareaComponent nuevaTarea ' + this.nueva);
    let tarea = new Tarea();
    tarea.titulo = this.nueva;
    this.tareaService.add( tarea ).subscribe( data =>{
      console.debug(data);
      this.recargarLista();    
      this.nueva = "";  
    });
  }



  mostrarTodos(opcion: boolean): boolean {
    console.log(opcion);
    return this.mostrarTodasTareas = opcion;
  }

  eliminar(id: number){
    console.log(id);
    this.tareaService.delete(id).subscribe(data =>{
      console.debug("Eliminado data");
      this.recargarLista();
    })
  }

}
