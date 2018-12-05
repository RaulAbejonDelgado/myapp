import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Frutas } from '../../model/frutas';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { FrutaService } from '../../providers/fruta.service';
import { FormControl, FormGroup, FormArray, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   private _objeto: Frutas;
  @Input('_objeto')

  
  public get objeto(): Frutas {
    return this._objeto;
  }
  public set objeto(value: Frutas) {
    if(value){
      this._objeto = value;
    }else{
      this._objeto = new Frutas();
    } 
  }
  id: number;
  simple: FormControl;//nombre de un input de un formulario
  formulario : FormGroup; // Esto nos permite cojer la totalidad de los inputs de un formulario
  frutas : Frutas[];
  visible : boolean;
  visibleForm : boolean;
  colores: FormArray;
  frutaDetalle : Frutas;
  

  //Registramos evento de salida
  @Output() clickCompra = new EventEmitter();

  constructor(private route: ActivatedRoute, public frutaService: FrutaService) {
    this.frutas = [];
    this.visible = true;
    this.visibleForm = true; 
    //Controle unico
    this.simple = new FormControl();
    this.simple.setValue("fresa");

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
    colores: new FormArray( [this.crearColorFormGroup() ], Validators.minLength(1) ),// quito para que inicialmente solo aparezca un campo color al inicializarse
    oferta : new FormControl(false),
    descuento : new FormControl(0),
    imagen: new FormControl('https://picsum.photos/300/300/?random', [ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')]),
    id : new FormControl(0),
    })

    console.trace("CardComponent -constructor")
    this.id = 0;
    
   }

  ngOnInit() {
    console.trace("CardComponent -ngOnInit")
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id
      this.obtenerPorId(this.id);
    });
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
    fruta.id = this.formulario.controls.id.value;
    console.log(fruta);
    this.frutaService.actualizar(fruta).subscribe(data =>{
      console.debug(data);
    })
  }

  obtenerPorId(id:number){
    this.frutaService.obtenerFrutaPorId(id).subscribe(data =>{
      this._objeto = data;
    });

  }

  comprar(event : Event){
    console.trace("CardComponent - comprar")
    
    alert(`Lo sentimos pero tenemos esta funcionamildad deshabilitada ${this._objeto.nombre}`);

    //Emitimos evento al componente padre
    this.clickCompra.emit({ frutaclick : this.objeto});
    
  }

  crearColorFormGroup(): FormGroup{
    return new FormGroup({
                color: new FormControl('verde', [ Validators.required, Validators.minLength(2), Validators.minLength(15)])
        });
  }
 

}