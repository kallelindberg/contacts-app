import {Injectable} from '@angular/core';
import {HttpService} from "../utils/http.service";
import {environment} from "../../environments/environment";
import {Login} from "./login";
import {Observable} from "rxjs";

@Injectable()
export class UserHttpService {

  constructor(private httpService: HttpService) {
  }

  public login(): Observable<Login> {
    return this.httpService
      .put(environment.userUrl, null).map(response => {
        let user = response.json();
        return new Login(user.userName, user.password);
      });
  }

}
