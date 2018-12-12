import { LoginService } from './../../../providers/login.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-backoffice',
  templateUrl: './cabecera-backoffice.component.html',
  styleUrls: ['./cabecera-backoffice.component.scss']
})
export class CabeceraBackofficeComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
