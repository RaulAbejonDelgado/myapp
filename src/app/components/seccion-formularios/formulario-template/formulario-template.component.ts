import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.scss']
})
export class FormularioTemplateComponent implements OnInit {
  correo:FormGroup;
  apellido:FormGroup;
  nombre:FormGroup;
  constructor() { }

  ngOnInit() {
  }

  guardarFormulario(formularioTemplate:NgForm){
    console.debug("NgForm: %o",formularioTemplate);
    console.log("valor: %o",formularioTemplate.value);
  }

}
