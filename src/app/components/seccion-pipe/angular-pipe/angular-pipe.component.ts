import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.scss']
})
export class AngularPipeComponent implements OnInit {

  title: string; 
  nombre:string ;
  array:number[];
  PI : number;
  a:number ;
  salario :number;
  fecha = new Date();
  nombre2 :string;
  activar :boolean;
  producto :any;

  constructor() {

    console.trace('AngularPipeComponent constructor');
    this.title = 'Pipes de Angular';
    this.nombre ='Raul';
    this.array = [1,2,3,4,5,6,7,8,9,];
    this.PI = Math.PI;
    this.salario = 1234.5 ;
    
    this.fecha = new Date();
    this.a = 0.234;
    this.activar = false;
    this.producto = {
      nombre:'Pagina web',
      tipo:'servicio',
      coste:200,
      almacenable:true
  };


    
   }

  ngOnInit() {
    console.trace('AngularPipeComponent ngOnInit');
  }



}
