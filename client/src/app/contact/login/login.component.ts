import { Component, Output, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from "../login";
import {LoginService} from "../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('','');
  legend = '';

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {

  }

  navigateToApp(){
    var login = this.loginService.authenticate(this.login);
    console.log(login)
    if(login) {
      this.router.navigate(['app']);
    }
    else{
      this.legend ='Incorrect password';
    }
  }
}
