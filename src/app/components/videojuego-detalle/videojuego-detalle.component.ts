import { Component, OnInit, Input } from '@angular/core';
import { Videojuego } from '../../model/videojuego';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {
  private _juego: Videojuego;
  @Input('_juego')

  
  public get juego(): Videojuego {
    return this._juego;
  }
  public set juego(value: Videojuego) {
    if(value){
      this._juego = value;
    }else{
      this._juego = new Videojuego();
    }
    
  }
    titulo : string ;
    videojuego : Videojuego;


  constructor() { 
    console.trace("pasamos por VideojuegoDetalleComponent constructor");
    //Esto esta accediendo al seeter
    this.titulo = "Aprendiendo a usar clases";

    this.videojuego = new Videojuego();

  }

  //siempre console en el constructor y ngOnintit
  ngOnInit() {
    console.trace("pasamos por VideojuegoDetalleComponent ngOnInit");
  }

}
