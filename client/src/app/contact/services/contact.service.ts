import { Injectable } from '@angular/core';
import { Contact } from "../contact";
import * as _ from "lodash";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [new Contact(null,'','','','','')];
    this.contacts.splice(0,1);
  }

  public findContacts(): Contact[]{
    return this.contacts;
  }

  public removeContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contacts.splice(index,1);
  }

  public addContact(contact){
    if(this.contacts[0]) {
      let maxId = _.maxBy(this.contacts, "id").id;
      contact.id = maxId + 1;
      this.contacts.push(contact);
    }
    else{
      contact.id = 1;
      this.contacts.push(contact);
    }
  }

  public editContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contacts.fill(contact,1,1);
  }

}
