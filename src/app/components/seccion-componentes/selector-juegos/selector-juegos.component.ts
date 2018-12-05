import { Component, OnInit, Input } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { VideojueosService } from 'src/app/providers/videojueos.service';
import { Frutas } from 'src/app/model/frutas';


@Component({
  selector: 'app-selector-juegos',
  templateUrl: './selector-juegos.component.html',
  styleUrls: ['./selector-juegos.component.scss']
})
export class SelectorJuegosComponent implements OnInit {



  videojuegoArray: Videojuego[];
  juegoSelecionado: Videojuego;
  jSelecionado1: Videojuego;
  jSelecionado2: Videojuego;
  juegosClickados: Videojuego[];
  juegosDesdeServicio: Videojuego[];
  juegoServicio: Videojuego;
  carrito: Videojuego[];
  totalPrecioJuegosClickados: number;
  conteoJuegos: number;
  totalJuego1: number;
  totalJuego2: number;
  totalJuego3: number;
  fruits : Frutas[];



  constructor(public videojueosService: VideojueosService) {

    this.juegoSelecionado = new Videojuego();
    this.jSelecionado1 = new Videojuego();
    this.jSelecionado2 = new Videojuego();
    this.juegoServicio = new Videojuego();
    this.videojuegoArray = [];
    this.fruits = [];
    //this.loadLista();
    this.jSelecionado1 = this.videojuegoArray[0];
    this.jSelecionado2 = this.videojuegoArray[1];
    this.totalPrecioJuegosClickados = 0;
    this.carrito = [];
    this.juegosDesdeServicio = [];
    this.loadFruits();

  }

  ngOnInit() {
    console.trace('SelectorJuegosComponent - ngOnInit');
    this.videojuegoArray = this.videojueosService.getAll();
    this.jSelecionado1 = this.videojuegoArray[0];
    this.jSelecionado2 = this.videojuegoArray[1];


  }

  //Ejemplo reutilizacion de componente card con la clase frutas

  
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
    f.imagen = "http://www.gm-importexport.com/uploads_es/ctlgproducto/fresa.jpg";
    this.fruits.push(f);


  }

  seleccionar(juego: Videojuego) {
    console.trace('ComparadorComponent seleccionar %o', juego);
    this.jSelecionado2 = this.jSelecionado1;
    this.jSelecionado1 = juego;
  }



  mostrarJuegos(juego: Videojuego) {
    this.juegoSelecionado = juego;

  }

  mostrarJuegos2(juego: Videojuego) {
    this.jSelecionado2 = this.jSelecionado1
    this.jSelecionado1 = juego;
  }

  actualizarCarrito(event: Event) {

    console.debug('SelectorJuegosComponent actualizarCarro Recivimos evento de componente hijo');
    let juegoClick = event['juegoClick'];
    let indice = this.carrito.indexOf(juegoClick);
    let f = this.carrito.find(f => f.titulo === juegoClick.nombre);
    if (indice != -1) {
      this.totalPrecioJuegosClickados += juegoClick.precio;
      console.log(juegoClick.precio);
      this.carrito[indice].cantidad += 1;
      this.carrito[indice].total = juegoClick.cantidad * juegoClick.precio;
    } else {

      this.totalPrecioJuegosClickados += juegoClick.precio;
      console.log(juegoClick.precio);
      juegoClick.cantidad += 1;
      juegoClick.total = juegoClick.cantidad * juegoClick.precio;
      this.carrito.push(juegoClick);
    }
  }

  sumarUno(juego: Videojuego) {

    juego.cantidad += 1;
    juego.total = juego.precio * juego.cantidad;
    this.totalPrecioJuegosClickados += juego.precio;

  }

  restarUno(juego: Videojuego) {
    if (juego.cantidad <= 0) {
      alert("La cantidad del producto esta en 0 por lo que no puede segir restando productos");
    } else {
      juego.cantidad -= 1;
      juego.total -= juego.precio ;
      this.totalPrecioJuegosClickados -= juego.precio;
    }


  }



}
