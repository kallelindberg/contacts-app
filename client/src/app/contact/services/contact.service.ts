import { Injectable } from '@angular/core';
import { Contact } from "../contact";
import * as _ from "lodash";
import {ContactHttpService} from "./contact-http.service";
import {ContactStorage} from "./contact-storage";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactService {

  public contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
  }

  public findContacts(){
    return this.contactHttpService.getAll();
  }

  public removeContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contactHttpService.removeContact(index).subscribe(status => {
      if(status == 200){
        this.contacts.splice(index, 1);
      }
    });
  }

  public addContact(contact){
    if(this.contacts[0]) {
      let maxId = _.maxBy(this.contacts, "id").id;
      contact.id = maxId + 1;
      this.contactHttpService.addContact(contact).subscribe(status => {
        if(status ==200){
          this.contacts.push(contact);
        }
      });
    }
    else{
      contact.id = 1;
      this.contactHttpService.addContact(contact).subscribe(status => {
        if(status ==200){
          this.contacts.push(contact);
        }
      });
    }
  }

  public editContact(contact){
    this.contactHttpService.editContact(contact).subscribe(status => {
      if (status == 200) {
        let index = this.contacts.findIndex((item) => item.id === contact.id);
        this.contacts.fill(contact, 1, 1);
      }
    });
  }

}
