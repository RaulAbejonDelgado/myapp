import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {
  formulario : FormGroup;
  usuario:Object;
  color:string;
  constructor() {
    this.usuario = {
        nombreCompleto : {
          nombre:"raul",
          apellido:"abejon"      
        },
        correo : "drohne@gmail.com"
        }
    console.log(this.usuario);
  this.formulario = new FormGroup({
    'nombreCompleto' : new FormGroup({
      'nombre' : new FormControl('',Validators.required),
      'apellido' : new FormControl('',Validators.required),
    }), 
    'correo' : new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    'colores' : new FormArray([
      new FormControl('')
    ])
  })
  this.color = "";
   }

  ngOnInit() {
  }

  metodoRecepcionPosteo(){
    console.debug("FormularioReactivoComponent - metodoRecepcionPosteo");
    console.debug(this.formulario);
    console.debug(this.formulario.controls);
    console.debug(this.formulario.value);
  }

  agregarColor(){
    (<FormArray>this.formulario.controls['colores']).push(new FormControl(this.color) );
  }

}
