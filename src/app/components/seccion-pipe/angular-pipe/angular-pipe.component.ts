import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.scss']
})
export class AngularPipeComponent implements OnInit {
  fecha : Date;
  numero : number;
  videojuegos : Videojuego[];
  alumnosSexo : Persona[];

  constructor() {

    this.numero = 1231.1231231231
    this.fecha = new Date();
    this.videojuegos = [];
    this.loadVideojuegos();
    this.alumnosSexo = [];
    this.loadAlumnos();
    
   }

  ngOnInit() {
    console.trace('PipeComponent ngOnInit');
  }

  loadVideojuegos(): void{
    console.trace('PipeComponent loadVideojuegos');
    let v : Videojuego = new Videojuego();
    v.titulo = "Mario";
    v.alquilado = true;
    this.videojuegos.push(v);

    v  = new Videojuego();
    v.titulo = "donkey";
    v.alquilado = true;
    this.videojuegos.push(v);

    v  = new Videojuego();
    v.titulo = "zelda";
    v.alquilado = false;
    this.videojuegos.push(v);

    v  = new Videojuego();
    v.titulo = "space";
    v.alquilado = false;
    this.videojuegos.push(v);

    console.trace(this.videojuegos)
  }

  loadAlumnos(): void{
    let a = new Persona();

    a.nombre = "raul";
    a.Sexo = 2;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre = "Luis";
    a.Sexo = 2;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre = "Ainara";
    a.Sexo = 1;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre = "ASier";
    a.Sexo = 2;
    this.alumnosSexo.push(a);
    
    a = new Persona();
    a.nombre="Adrian";
    a.Sexo = 2;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre = "Adriana";
    a.Sexo = 1;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre="Andrea";
    a.Sexo = 1;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre = "valeria";
    a.Sexo = 1;
    this.alumnosSexo.push(a);

    a = new Persona();
    a.nombre = "Manolo";
    a.Sexo = 3;
    this.alumnosSexo.push(a);
  }

}
