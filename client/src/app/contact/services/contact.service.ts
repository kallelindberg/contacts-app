import { Injectable } from '@angular/core';
import { Contact } from "../contact";
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
    this.contactStorage.removeContact(contact.id).subscribe(result => {
      if(result.status == 200){
        let index =  this.contacts.findIndex((item) => item.id === contact.id);
        this.contacts.splice(index, 1);
        this.contacts = result.json();
      }
      else{
        this.contacts = result.json();
      }
    });
  }

  public addContact(contact){
    contact.id=0;
    this.contactStorage.addContact(contact).subscribe(result => {
      if(result.status == 200){
        this.contacts.push(contact);
        this.contacts = result.json();
      }
      else{
        this.contacts = result.json();
      }
    });
  }

  public editContact(contact){
    this.contactStorage.editContact(contact).subscribe(result => {
      if (result.status == 200) {
        let index = this.contacts.findIndex((item) => item.id === contact.id);
        this.contacts.splice(index, 1, contact);
        this.contacts = result.json();
      }
      else{
        this.contacts = result.json();
      }
    });
  }

}
