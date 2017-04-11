import { Injectable } from '@angular/core';
import { Contact } from "../contact";
import * as _ from "lodash";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1,'blobbo', 'fwefwwefwe', '06957780608960', 'Rietinkatu', 'Lappeenranta'),
      new Contact(2,'fwefwerfo', 'yujyujyur'),
      new Contact(3,'rwerwerwer', 'fertertert')
    ];
  }

  public findContacts(): Contact[]{
    return this.contacts;
  }

  public removeContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contacts.splice(index,1);
  }

  public addContact(contact){
    let maxId = _.maxBy(this.contacts, "id").id;
    contact.id = maxId+1;
    this.contacts.push(contact);
  }

  public editContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contacts.fill(contact,index,index);
  }

}
