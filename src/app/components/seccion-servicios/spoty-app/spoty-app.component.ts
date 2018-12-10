import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotyAppService } from 'src/app/providers/spoty-app.service';

@Component({
  selector: 'app-spoty-app',
  templateUrl: './spoty-app.component.html',
  styleUrls: ['./spoty-app.component.scss']
})
export class SpotyAppComponent implements OnInit {
  albunes: any[];
  token_type: string;
  access_token: string;
  constructor(private spotyService: SpotyAppService) {
    this.albunes = [];


  }




  ngOnInit() {
  }

  renovarToken() {
    this.spotyService.getToken().subscribe(data => {
      console.log(data);
      this.token_type = data.token_type;
      this.access_token = data.access_token;
    })
  }

  traerUltimosAlbunes() {

    this.spotyService.getUltimosAlbunes(this.token_type, this.access_token).subscribe(data => {
      console.log(data);
      data.albums.items.forEach(el => {
        
        console.log(el);
        this.albunes.push(el);
      });
    })
  }


}
