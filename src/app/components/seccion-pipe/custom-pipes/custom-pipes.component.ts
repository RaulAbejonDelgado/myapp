import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  videojuegos : Videojuego[];
  alumnosSexo : Persona[];
  nombre : string;
  cantidad: number; 
  
  constructor() { 

    console.trace("CustomPipesComponent - constructor");
    this.cantidad = 300;
    this.nombre = "raul abejon delgado";
    this.videojuegos = [];
    this.loadVideojuegos();
    this.alumnosSexo = [];
    this.loadAlumnos();
  }

  ngOnInit() {
    console.trace("CustomPipesComponent - ngOnInit");
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
