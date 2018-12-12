import { Videojuego } from './../../../model/videojuego';
import { VideojueosService } from './../../../providers/videojueos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion-funcional',
  templateUrl: './programacion-funcional.component.html',
  styleUrls: ['./programacion-funcional.component.scss']
})
export class ProgramacionFuncionalComponent implements OnInit {


  juegos : Videojuego[];
  juegosPorNombre : Videojuego[];
  j :Videojuego;
  nombreJuegos : string[];
  totaColumnaPrecio : number;
  precioMedio : number;
  primerJuegoAlquilado : Videojuego;
  juegosAlquilados : Videojuego[];

  constructor(private juegosService: VideojueosService ) {

    console.log('ProgramacionFuncionalComponent - constructor');
    this.primerJuegoAlquilado = new Videojuego();
    this.juegosAlquilados = [];
    this.precioMedio = 0;
    this.totaColumnaPrecio = 0;
    this.nombreJuegos = [];
    this.juegos = [];
    this.juegosPorNombre = [];
    this.j = new Videojuego();
    this.cargarJuegos();
   }



  ngOnInit() {
    
   
  }

  cargarJuegos() {
    console.log('ProgramacionFuncionalComponent - cargarJuegos');
    this.juegosService.getAllFromService().subscribe(data =>{

      data.forEach(j => {

        this.juegos.push(j);

      });

      this.primerJuegoPorNombre();   
      this.obtenerNombreJuegos();
      this.obtenerTotalPrecios();
      this.obtenerPrecioMedio();
      this.primerJuegoAlquiladofn();
      this.juegosAlquiladosFn();
    });

  }

  primerJuegoPorNombre(){
    
    this.j = this.juegos.find(juego =>  juego.titulo === 'lineage2');

  }

  primerJuegoAlquiladofn(){
    
    this.primerJuegoAlquilado = this.juegos.find(juego =>  juego.alquilado === true);
      
  }

  juegosAlquiladosFn(){
    
    this.juegosAlquilados = this.juegos.filter(juego =>  juego.alquilado === true);
      
  }



  obtenerNombreJuegos(){
    this.nombreJuegos = this.juegos.map(juego => juego.titulo );

  }

  obtenerTotalPrecios(){
    this.totaColumnaPrecio = this.juegos.map(juego => juego.precio).reduce((c,p) => c+p );
    console.log(this.totaColumnaPrecio);
  }

  obtenerPrecioMedio(){
    this.precioMedio = this.juegos.map(juego => juego.precio).reduce((c,p) => c+p );
    this.precioMedio = this.precioMedio / this.juegos.length;
    console.log(this.precioMedio);
  }


}
