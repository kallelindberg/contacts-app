import { Injectable } from '@angular/core';
import { Contact } from "../contact";
import * as _ from "lodash";
import {ContactHttpService} from "./contact-http.service";
import {ContactStorage} from "./contact-storage";
import {environment} from "../../../environments/environment";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class ContactService {

  contactStorage: ContactStorage;

  contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService,
              private localStorageService: LocalStorageService) {
    this.contactStorage = environment.endPointUrl ? contactHttpService : localStorageService;
  }

  public findContacts(){
    return this.contactStorage.showContact();
  }

  public removeContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contactStorage.removeContact(index).subscribe(result => {
      if(result.status == 200){
        this.contacts.splice(index, 1);
      }
      else{
        this.contacts = result.json();
      }
    });
  }

  public addContact(contact){
    if(this.contacts[0]) {
      let maxId = _.maxBy(this.contacts, "id").id;
      contact.id = maxId + 1;
    }
    else{
      contact.id = 1;

    }
    this.contactStorage.addContact(contact).subscribe(result => {
      if(result.status == 200){
        this.contacts.push(contact);
      }
      else{
        this.contacts = result;
      }
    });
  }

  public editContact(contact){
    this.contactStorage.editContact(contact).subscribe(result => {
      if (result.status == 200) {
        let index = this.contacts.findIndex((item) => item.id === contact.id);
        this.contacts.splice(index, 1, contact);
    }
      else{
        this.contacts = result;
      }
    });
  }

}
