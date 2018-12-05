import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Frutas } from '../../model/frutas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   private _objeto: Frutas;
  @Input('_objeto')

  
  public get objeto(): Frutas {
    return this._objeto;
  }
  public set objeto(value: Frutas) {
    if(value){
      this._objeto = value;
    }else{
      this._objeto = new Frutas();
    } 
  }

  //Registramos evento de salida
  @Output() clickCompra = new EventEmitter();

  constructor() {

    console.trace("CardComponent -constructor")
    
   }

  ngOnInit() {
    console.trace("CardComponent -ngOnInit")
  }



  comprar(event : Event){
    console.trace("CardComponent - comprar")
    
    alert(`Lo sentimos pero tenemos esta funcionamildad deshabilitada ${this._objeto.nombre}`);

    //Emitimos evento al componente padre
    this.clickCompra.emit({ frutaclick : this.objeto});
    
  }

}