import { Tarea } from 'src/app/model/tarea';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endpoint : string ='http://localhost:3000/tareas' ;


  constructor(public http : HttpClient) { 
    console.trace('TareaService - constructor');
  }

  public saveOrUpdate(tarea : Tarea) :Observable<Tarea>{
    console.log(tarea);
    var test = JSON.stringify(tarea);
    console.log(test);
    return this.http.post<any>("http://localhost:3000/tareas",JSON.stringify(tarea),{headers: {'Content-Type': 'application/json; charset=utf-8'}});

  }

  getAll(): Observable <any>{
    console.trace('TareaService - getAll');
    console.log(this.http.get(this.endpoint));
    return this.http.get(this.endpoint);
  }

  add(tarea: Tarea): Observable<any>{
    console.trace(`TareaService add ${this.endpoint}`);
    let body  = {
          // "id": tarea.id,
          "titulo": tarea.titulo,
          "terminado": tarea.terminado
        };  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post( this.endpoint, body , httpOptions );
}

  delete(id: number): Observable <any>{
    let uri = this.endpoint + "/"+id;
    console.trace("TareaService - delete->" + uri);
    return this.http.delete(this.endpoint + "/"+id);
  }

  // public createTask(tarea: Tarea): Observable<any>{
  //   return this.http.post(this.endpoint ,JSON.stringify(tarea));
  // }
}
