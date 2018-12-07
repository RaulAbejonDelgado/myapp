import { Colores } from './../../../model/frutas';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Component, OnInit, Input } from '@angular/core';
import { Frutas } from 'src/app/model/frutas';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-frutas-editable-card',
  templateUrl: './frutas-editable-card.component.html',
  styleUrls: ['./frutas-editable-card.component.scss']
})
export class FrutasEditableCardComponent implements OnInit {

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
  formulario : FormGroup;
  color : FormControl;
  

  constructor(private route: ActivatedRoute,public frutaService : FrutaService) {
    this.color= new FormControl();
    this.formulario = new FormGroup({
      nombre : new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      precio : new FormControl(0,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
      calorias : new FormControl(0,[Validators.required,Validators.minLength(0)]),
      colores: new FormArray( [ this.crearColorFormGroup() ]),// quito para que inicialmente solo aparezca un campo color al inicializarse, this.crearColorFormGroup(),
      oferta : new FormControl(false),
      descuento : new FormControl(0),
      imagen: new FormControl('https://picsum.photos/300/300/?random', [ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\(.png|.jpg|j.peg|random))$')])})
   }

  ngOnInit() {
    console.trace("CardComponent -ngOnInit")
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id
      this.obtenerPorId(this.id);
    });
  }

  obtenerPorId(id:number){
    this.frutaService.obtenerFrutaPorId(id).subscribe(data =>{
      this._objeto = data;
    });

  }

  crearColorFormGroup(): FormGroup{
    //console.log(this._objeto.colores);
    console.log(this.color.value);
    return new FormGroup({
                
                color: new FormControl(this.color.value)
        });
  }

  nuevoColor(){    
    let arrayColores = this.formulario.get('colores') as FormArray;
    let arrayObjetoColores = this._objeto.colores;
    console.log(arrayColores);
    console.log(this._objeto.colores);
    //this._objeto.colores.push(this.color.value);
    arrayColores.push(new FormGroup({color: new FormControl(this.color.value)}));
    // for (let i of this._objeto.colores){
    //   console.log(i);
    //   this.formulario.controls.Colores = arrayColores;
    //   arrayColores.push(new FormGroup({color: new FormControl(this.color.value)}));
    // }
    
  }

  eliminarColor( index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    if ( arrayColores.length > 1 ){
      arrayColores.removeAt(index);
    }  
  }

  actualizar(){
    console.log("modificar - sumitar %o",  this.formulario);
    let fruta = new Frutas();
    fruta.id = this.id;
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.colores = this.formulario.controls.colores.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    this.frutaService.actualizar(fruta).subscribe(data =>{
      console.debug(data);
      this._objeto = data;
    })
    

  }

}
