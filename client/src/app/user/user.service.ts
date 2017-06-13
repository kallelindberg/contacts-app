import { Injectable } from '@angular/core';
import { Login } from './login';
import * as _ from "lodash";
import {AuthenticationService} from "./authentication/authentication.service";
import {UserHttpService} from "./user-http.service";

@Injectable()
export class UserService {

  loggedUser: Login;

  constructor(private authenticationService : AuthenticationService, private userHttpService: UserHttpService) { }

  login(login){
    return this.authenticationService.authenticate(login).flatMap(() =>{
      return this.userHttpService.login().map((user: Login) =>{
        this.loggedUser = user;
        return user;
      });
    })
  }

  getLoggedUser(){
    return this.loggedUser;
  }

}

