import { Injectable } from '@angular/core';
import { Login } from '../login';
import * as _ from "lodash";
import {ContactHttpService} from "./contact-http.service";

@Injectable()
export class LoginService {

  login: Login;


  constructor(private contactHttpService: ContactHttpService) { }

  public authenticate(login){

    this.contactHttpService.authenticate(login).subscribe(result => {
      return result.json();
    })

  }

}
