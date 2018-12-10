import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Frutas } from 'src/app/model/frutas';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario-frutas',
  templateUrl: './formulario-frutas.component.html',
  styleUrls: ['./formulario-frutas.component.scss']
})
export class FormularioFrutasComponent implements OnInit {
 
  simple: FormControl;//nombre de un input de un formulario
  formulario : FormGroup; // Esto nos permite cojer la totalidad de los inputs de un formulario
  frutas : Frutas[];
  visible : boolean;
  visibleForm : boolean;
  colores: FormArray;

  constructor(public frutaService : FrutaService) { 
    console.trace("FormulariooComponent -constructor ");
    this.frutas = [];
    this.visible = true;
    this.visibleForm = true; 
    //Controle unico
    this.simple = new FormControl();
    this.simple.setValue("fresa");//para setear valores por defecto en un formulario
    //agrupacion de inputs de un formulario
    this.formulario = new FormGroup({
      nombre : new FormControl('',
                              [
                                Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(50)
                              ]),
      precio : new FormControl('0',//valor inicial
                              //validaciones
                                [ 
                                    Validators.required,
                                    Validators.minLength(0),
                                    Validators.maxLength(5)

                                ]),
    calorias : new FormControl(0,
                                [
                                    Validators.required,
                                    Validators.minLength(0)
                                ]),
    colores: new FormArray( [this.crearColorFormGroup()] ),//this.crearColorFormGroup(), quito para que inicialmente solo aparezca un campo color al inicializarse
    oferta : new FormControl(false),
    descuento : new FormControl(0),
    imagen: new FormControl('https://picsum.photos/300/300/?random', [ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\(.png|.jpg|j.peg|random))$')]),
    })
    this.recargarLista();
  }

  ngOnInit() {
    console.trace("FormulariooComponent -ngOnInit ")
  }

  cargarFormulario(){
    this.formulario.controls.nombre.setValue('fresa');
    this.formulario.controls.precio.setValue(2.55);
    this.formulario.controls.colores.setValue('Rojo');
    this.formulario.controls.descuento.setValue(10);
    this.formulario.controls.imagen.setValue('https://static9.depositphotos.com/1642482/1149/i/450/depositphotos_11491656-stock-photo-strawberry.jpg');
    
  }
  sumitar(){
    console.log("FormulariooComponent - sumitar %o",  this.formulario);
    let fruta = new Frutas();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.colores = this.formulario.controls.colores.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    this.frutaService.add(fruta).subscribe(data =>{
      console.debug(data);
    })
    this.recargarLista();

  }

  recargarLista(){
    this.frutaService.getAll().subscribe(data =>{
      console.debug('datos recividos %o', data);
      this.frutas = data.map(el => el)
    })
  }

  showSimpleControlValues(){
    this.visible = !this.visible;
  }
  showSimpleFormControlValues(){
    this.visibleForm = !this.visibleForm;
  }

  nuevoColor(){
    let arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }

  eliminarColor( index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    if ( arrayColores.length > 1 ){
      arrayColores.removeAt(index);
    }  
  }

  crearColorFormGroup(): FormGroup{
    return new FormGroup({
                color: new FormControl('#000000')
        });
  }
}
