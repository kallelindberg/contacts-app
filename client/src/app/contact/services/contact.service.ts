import { Injectable } from '@angular/core';
import { Contact } from "../contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0,'blobbo', 'fwefwwefwe'),
      new Contact(1,'fwefwerfo', 'yujyujyur'),
      new Contact(2,'rwerwerwer', 'fertertert')
    ];
  }

  public findContacts(): Contact[]{
    return this.contacts;
  }

}
