import { Injectable } from '@angular/core';
import {Login} from "../login";
import {environment} from "../../../environments/environment";
import {HttpService} from "../../utils/http.service";

@Injectable()
export class AuthenticationService {

  constructor(private httpService: HttpService) { }


  public authenticate(login : Login){
    return this.httpService.post(environment.loginUrl+'/authenticate', login).map(response => {
      this.httpService.saveToken(response.json().token);
      return true;
    });
  }
}
