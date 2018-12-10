import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyAppService {

  constructor(private http: HttpClient) {
      console.log("SpotyAppService -  constructor")
      
   }

   getUltimosAlbunes(toke_type:string,access_token:string):Observable<any>{

    //necesitamos añadir el token al header y lo mandamos con la peticion get
    const headers =  new HttpHeaders({
        "Authorization":"Bearer BQAlg8w6unvlpRmNHkwwLOnNNRsKg1ra6xY2C_wZHtt3qAkEjLUCdAwzvkOQNMn80n0B4rodhwvXUGzb4Kw"
    })
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
   }

   getToken():Observable<any>{
    let body  = {
      // "id": tarea.id,
      "grant_type": "client_credentials",
      "client_id": "2d7b32519af346dc9b89ee892fcd86ac",
      "client_secret":"d68d371e7ef84785a3c6e73335590abd"
    };  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    return this.http.post("https://accounts.spotify.com/api/token",body,httpOptions);
   }
}
