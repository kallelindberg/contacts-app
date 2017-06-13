import { Component, Output, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from "../../user/login";
import {UserService} from "../../user/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('','');
  legend = '';

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {

  }

  navigateToApp(){
    this.userService.login(this.login).subscribe(data => {
      if(JSON.stringify(data) == JSON.stringify(this.login)){
        this.router.navigate(['app']);
      }
        else{
        this.legend = "Incorrect password";
        }
    });
  }
}
