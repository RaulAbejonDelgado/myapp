import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-informacion',
  templateUrl: './flujo-informacion.component.html',
  styleUrls: ['./flujo-informacion.component.scss']
})
export class FlujoInformacionComponent implements OnInit {
  titulo : string;
  visible : boolean;
  clase : string;
  textoBoton : string;
  nombre : string;
  constructor() {
    console.trace('FlujoInformacionComponent constructor');
    this.titulo = 'Flujo de datos de informacion entre la vista el modelo y modelo vista ';
    this.visible = false;
    this.clase = 'remarcar';
    this.textoBoton = 'ocultar';
    this.nombre = '';

   }



  ngOnInit() {
    console.trace('FlujoInformacionComponent ngOnInit');
  }

  showHide(){
    console.trace('Click showHide button');

    this.visible = (this.visible) ? false : true;
    this.textoBoton = (this.visible) ? 'ocultar' : 'mostrar';
  
  };

}
