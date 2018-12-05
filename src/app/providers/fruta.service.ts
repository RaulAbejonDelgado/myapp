import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frutas } from '../model/frutas';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  endpoint : string ='http://localhost:3000/frutas' ;

  constructor(public http : HttpClient) { }

  getAll(): Observable <any>{
    console.trace('TareaService - getAll');
    console.log(this.http.get(this.endpoint));
    return this.http.get(this.endpoint);
  }

  add(fruta: Frutas): Observable<any>{
    console.trace(`TareaService add ${this.endpoint}`);
    let body  = {
          //"id": tarea.id,
          "nombre": fruta.nombre,
          "precio": fruta.precio,
          "calorias": fruta.calorias, 
          "colores" : fruta.colores,
          "oferta": fruta.oferta,
          "descuento": fruta.descuento,
          "imagen" : fruta.imagen
        };  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post( this.endpoint, body , httpOptions );
}


}
