import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '../../../../../node_modules/@angular/forms';
import { Frutas } from '../../../model/frutas';
import { FrutaService } from '../../../providers/fruta.service';

@Component({
  selector: 'app-frutas-crud',
  templateUrl: './frutas-crud.component.html',
  styleUrls: ['./frutas-crud.component.scss']
})
export class FrutasCrudComponent implements OnInit {
  simple: FormControl;//nombre de un input de un formulario
  formulario : FormGroup; // Esto nos permite cojer la totalidad de los inputs de un formulario
  frutas : Frutas[];
  visible : boolean;
  visibleForm : boolean;
  colores: FormArray;
  color : FormControl;
  frutaDetalle : Frutas;
  formularioNuevo : boolean;

  constructor(public frutaService : FrutaService) { 
    console.trace("FormulariooComponent -constructor ");
    this.formularioNuevo = true;
    this.frutas = [];
    this.visible = true;
    this.visibleForm = false; 
    this.color= new FormControl();
    //Controle unico
    this.simple = new FormControl();
    this.simple.setValue("fresa");//para setear valores por defecto en un formulario
    //agrupacion de inputs de un formulario
    this.formulario = new FormGroup({
      nombre : new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio : new FormControl(0,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
      calorias : new FormControl(0,[Validators.required,Validators.minLength(0)]),
      colores: new FormArray( [ this.crearColorFormGroup() ], Validators.minLength(0)),// quito para que inicialmente solo aparezca un campo color al inicializarse, this.crearColorFormGroup(),
      oferta : new FormControl(false),
      descuento : new FormControl(0),
      imagen: new FormControl('https://picsum.photos/300/300/?random', [ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\(.png|.jpg|j.peg|random))$')])})
      this.recargarLista();
  }

  ngOnInit() {
    console.trace("FormulariooComponent -ngOnInit ")
  }


  recargarLista(){
    this.frutaService.getAll().subscribe(data =>{
      console.debug('datos recividos %o', data);
      this.frutas = data.map(el => el)
    })
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
      this.recargarLista();
      this.vaciarFormulario();
    })
    

  }

  cargarFormulario(){

    this.formulario.controls.nombre.setValue('fresat');
    this.formulario.controls.precio.setValue(2.55);
    this.formulario.controls.colorres[0].setValue('#54a320');
    this.formulario.controls.descuento.setValue(10);
    this.formulario.controls.calorias.setValue(0);
    this.formulario.controls.oferta.setValue(0);
    //this.formulario.setValue({'status':'VALID'});
  }

  vaciarFormulario(){
    this.formulario.controls.nombre.setValue('');
    this.formulario.controls.precio.setValue('');
    this.formulario.controls.colores.setValue([]);
    this.formulario.controls.descuento.setValue('');
    this.formulario.controls.imagen.setValue('');
    this.formulario.controls.calorias.setValue('');
    this.formulario.controls.oferta.setValue('');
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

  getColores(): FormArray{
     
    return this.formulario.get('colores') as FormArray;
  }

  eliminarColor( index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    if ( arrayColores.length > 1 ){
      arrayColores.removeAt(index);
    }  
  }

  crearColorFormGroup(): FormGroup{
    return new FormGroup({
                color: new FormControl("#000000", [ Validators.required])
        });
  }

  eliminar(id: number){
    console.log(id);
    this.frutaService.delete(id).subscribe(data =>{
      console.debug("Eliminado data");
      this.recargarLista();
    })
  }

  mostrarFruta(fruta: Frutas){
    this.frutaDetalle = fruta;
  }

  mostrarFormulario(){
    this.formularioNuevo = !this.formularioNuevo;

  }
}
