import { Component, Output, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from "../login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  legend = '';

  constructor(private router:Router) { }

  ngOnInit() {
    if(!this.login){
      this.login = new Login('','');
    }
  }

  navigateToApp(){
    if(this.login.userId =='1' && this.login.password =='2') {
      this.router.navigate(['app']);
    }
    else{
      this.legend ='Incorrect password';
    }
  }
}
