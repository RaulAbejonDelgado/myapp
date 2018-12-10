import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-seccion-backoffice',
  templateUrl: './seccion-backoffice.component.html',
  styleUrls: ['./seccion-backoffice.component.scss']
})
export class SeccionBackofficeComponent implements OnInit {

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  logOut(){
    console.trace("SeccionBackofficeComponent - logOut")
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
