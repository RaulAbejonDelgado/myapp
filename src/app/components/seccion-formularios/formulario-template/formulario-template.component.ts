import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.scss']
})
export class FormularioTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardarFormulario(formularioTemplate:NgForm){
    console.debug("NgForm: %o",formularioTemplate);
    console.log("valor: %o",formularioTemplate.value);
  }

}
