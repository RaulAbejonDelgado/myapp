import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../providers/tarea.service';
import { Tarea } from '../../model/tarea';
import { Videojuego } from '../../model/videojuego';
import { VideojueosService } from '../../providers/videojueos.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  tarea : Tarea[];
  juegos : Videojuego[];



  constructor(public tareaService: TareaService, public videojuegoService: VideojueosService) {
    console.trace('TareaComponent - constructor');
    this.tarea = [];
    this.juegos = [];

   }

  ngOnInit() {
    console.trace('TareaComponent - ngOnInit')
    // llamar al servicio desde el ngoninit no desde el constructor
    //como el objeto es un observable debemos subcribirnos desde el componete que quiera acceder los datos
    this.tareaService.getAll().subscribe(data =>{
      console.debug('datos recividos %o', data);
      this.tarea = data.map(el => el)
    })

    this.videojuegoService.getAllFromService().subscribe(data =>{
      console.debug('datos recividos %o', data);
      this.juegos = data.map(el => el)
    }) 
  }

}
