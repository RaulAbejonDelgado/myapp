import { Component, OnInit } from '@angular/core';
import { Frutas } from 'src/app/model/frutas';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  // atributos declarar y no inicializar, siempre se inicializan en el constructor
  titulo : string;
  frutas : string[];

  fruits : Frutas[];
  precioTotal: number;
  nombresArray: string[];
  frutasOferta: Frutas[];
  frutasColor: Frutas[];
  primeraFrutaOferta: Frutas;
  primeraFrutaOfertaVerde: Frutas;


  constructor() {
    console.trace('FrutaComponent constructor');
    this.titulo = 'fruta';
    this.frutas = ['fresa','platano','mango','kiwi'];
    this.fruits = [];
    this.precioTotal = 0;
    this.nombresArray = [];
    this.frutasOferta = [];
    this.frutasColor = [];
    this.primeraFrutaOferta = new Frutas();
    this.primeraFrutaOfertaVerde = new Frutas();
    this.loadFruits();
    this.loadTotal();
    this.loadNombres();
    this.loadOfertas();
    this.loadFrutasColor();
    this.consegirPrimeraFrutaVerde();
   }

   // despues de haberse construido el componente despues de renderizarse
  ngOnInit() {
    console.trace('FrutaComponent ngOnInit');
  }

  loadFrutasColor(): void{
    for (let fc of this.fruits) {
      for(let color of fc.colores){
        if(color === 'rojo'){
          this.frutasColor.push(fc);
        }
      }
  }
}

  loadOfertas(): void{
    for (let fo of this.fruits) {
      if(fo.oferta === true){
        this.frutasOferta.push(fo);
      }
     
    }
    //this.frutasColor = this.fruits.map(el => el.oferta)
  }

  loadNombres(): void{

    for (let fn of this.fruits) {
      this.nombresArray.push(fn.nombre);
      console.trace(this.nombresArray);
  }
}

  loadFruits(): void{
    let f = new Frutas();

    f.nombre = 'banana';
    f.precio  = 3.15;
    f.calorias = 500;
    f.colores = ['amarillo','negro'];
    f.oferta = true;
    f.descuento = 10;
    f.imagen = "https://www.abc.es/media/sociedad/2017/12/02/platanos-potasio-salud-k3gG-U212262406718N6D-620x400@abc.jpg";
    this.fruits.push(f);

    f = new Frutas();

    f.nombre = 'pera';
    f.precio  = 2;
    f.calorias = 350;
    f.colores = ["amarillo", "verde"];
    f.oferta = false;
    f.descuento = 15;
    f.imagen = "https://www.ayuno.es/wp-content/uploads/2017/12/propriedades-de-la-pera.jpg";
    this.fruits.push(f);

    f = new Frutas();

    f.nombre = 'fresa';
    f.precio  = 0.75;
    f.calorias = 100;
    f.colores = ["rosa", "rojo","verde"];
    f.oferta = true;
    f.descuento = 20;
    f.imagen = "https://ecocosas.com/wp-content/uploads/2012/10/img_cuales_son_los_beneficios_de_las_fresas_7561_orig.webp";
    this.fruits.push(f);


  }

  loadTotal(): void{

  this.precioTotal = this.fruits.map(el => el.precio).reduce((c,p) => c+p);
}

consegirPrimeraFrutaOferta():void{

  this.primeraFrutaOferta = this.fruits.find( fruta => fruta.oferta === true );
}
consegirPrimeraFrutaVerde():void{
  
  this.primeraFrutaOfertaVerde = this.fruits.find( f =>
                                                     f.colores.find( c => 
                                                      c === "verde") === 'verde');
}
}

