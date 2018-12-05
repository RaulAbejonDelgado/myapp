import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Videojuego } from '../model/videojuego';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Tarea } from '../model/tarea';

//No hace falta hacer un new ya que el injectable se encarga de eso
@Injectable({
  providedIn: 'root'
})
export class VideojueosService {

  endpoint : string ='http://localhost:3000/juegos' ;

  videojuegoArray : Videojuego[];

  constructor(public http : HttpClient) { 
    console.log('VideojueosService - constructor');
  }

  //metodo que usa el servicio rest a endpoint
  getAllFromService(): Observable <any>{
    console.trace('VideojueosService - getAllFromService');
    console.log(this.http.get(this.endpoint));
    return this.http.get(this.endpoint);
  }
  //Metodos usados para ejemplo no rest
  getAll(): Videojuego[]{
    this.loadLista();
    return this.videojuegoArray;
    
  }

  loadLista(){

    this.videojuegoArray = [];
    let v = new Videojuego();
    v.titulo = "diablo";
    v.alquilado = false;
    v.anyo = 1998;
    v.descripcion = "loren";
    v.precio = 35;
    v.imagen=""; 
    this.videojuegoArray.push(v);

    let v1 = new Videojuego();
    v1.titulo = "fallout";
    v1.alquilado = false;
    v1.anyo = 1998;
    v1.descripcion = "loren";
    v1.precio = 35;
    v1.imagen=""; 
    this.videojuegoArray.push(v1);

    let v2 = new Videojuego();
    v2.titulo = "lineage2";
    v2.alquilado = false;
    v2.anyo = 1998;
    v2.descripcion = "loren";
    v2.precio = 35;
    v2.imagen=""; 
    this.videojuegoArray.push(v2  );


  }


}
