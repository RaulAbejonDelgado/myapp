import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-videojuego-card',
  templateUrl: './videojuego-card.component.html',
  styleUrls: ['./videojuego-card.component.scss']
})
export class VideojuegoCardComponent implements OnInit {

  private _juego: Videojuego;
  private _juego2?: Videojuego;

   //Registramos evento de salida
   @Output() clickCompra = new EventEmitter();


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

  @Input('_juego2')
  public get juego2(): Videojuego {
   return this._juego;
 }
 public set juego2(value: Videojuego) {
   if(value){
     this._juego2 = value;
   }else{
     this._juego2 = new Videojuego();
   }
   
 }
  

  constructor() { 
    console.trace("pasamos por VideojuegoDetalleComponent constructor");
 
  

  }

  //siempre console en el constructor y ngOnintit
  ngOnInit() {
    console.trace("pasamos por VideojuegoDetalleComponent ngOnInit");
  }

  comprar() {
    console.trace('FrutaCardComponent comprar');
    //alert(`Lo sentimos pero de momento detemos esta opcion deshabilitada ## ${this.juego.titulo} ## `);

    // Emitimos eventos al componente padre y enviamos parametro 'frutaClick'
    this.clickCompra.emit( { juegoClick : this.juego } );

  }

}
