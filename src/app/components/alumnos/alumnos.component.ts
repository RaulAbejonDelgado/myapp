import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { Sexo } from '../../model/persona';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos : string[];

  titulo : string;

  constructor() { 
    console.trace('AlumnosComponent constructor');
    this.alumnos = ['Alain', 'Valeria', 'Andrea', 'Adriana', 'Adrian', 'Asier', 'Raul', 'Luis puto amo'];
    this.titulo = 'alumnos titulo';
  
  }

  ngOnInit() {
    console.trace('AlumnosComponent ngOnInit');
  }



}
