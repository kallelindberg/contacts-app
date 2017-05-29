import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Login} from "../login";

@Injectable()
export class ContactHttpService {

  constructor(private http: Http) { }

  public showContact(){
    return this.http
      .get(environment.endPointUrl)
      .map(response => response.json() as Contact[]);
  }

  public removeContact(index){
    let actionUrl= environment.endPointUrl+'/'+index;
    return this.http
      .delete(actionUrl)
      .map(response => response);

  }

  public addContact(contact: Contact){
    return this.http
      .post(environment.endPointUrl+'/add', contact)
      .map(response => response);
  }

  public editContact(contact: Contact){
    return this.http
      .put(environment.endPointUrl+'/update', contact)
      .map(response => response);
  }

  public authenticate(login : Login){
    return this.http
      .post(environment.loginUrl+'/authenticate', login)
      .map(response => response);
  }

}
