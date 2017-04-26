import { Injectable } from '@angular/core';
import { Login } from '../login';
import * as _ from "lodash";

@Injectable()
export class LoginService {

  login: Login = new Login('Username','password');


  constructor() { }

  logIn(userId, password){

    if(userId == this.login.userId && password == this.login.password) {
      return true;
    }
    else{
      return false;
    }
  }

}
