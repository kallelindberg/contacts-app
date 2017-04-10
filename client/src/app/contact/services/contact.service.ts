import { Injectable } from '@angular/core';
import { Contact } from "../contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0,'blobbo', 'fwefwwefwe', '06957780608960', 'Rietinkatu', 'Lappeenranta'),
      new Contact(1,'fwefwerfo', 'yujyujyur'),
      new Contact(2,'rwerwerwer', 'fertertert')
    ];
  }

  public findContacts(): Contact[]{
    return this.contacts;
  }

  public removeContact(contact){
    let index =  this.contacts.findIndex((item) => item.id === contact.id);
    this.contacts.splice(index,1);
  }

}
