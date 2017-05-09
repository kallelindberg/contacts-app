import { Injectable } from '@angular/core';
import {ContactStorage} from "./contact-storage";
import {Contact} from "../contact";
import {Observable} from "rxjs";

@Injectable()
export class LocalStorageService implements ContactStorage {

  private localStorageKey ='contacts';

  constructor() {
    if(!localStorage.getItem(this.localStorageKey)){
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public showContact(){
    let contacts = this.getFromLocalStorage();
    return Observable.of(contacts);
  }

  public addContact(contact : Contact){
    let contacts = this.getFromLocalStorage();
    contacts.push(contact);
    this.saveToLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public removeContact(index){
    let contacts = this.getFromLocalStorage();
    contacts.splice(index, 1);
    this.saveToLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public editContact(contact: Contact){
    let contacts = this.getFromLocalStorage();
    let index = contacts.findIndex((item) => item.id === contact.id);
    contacts.splice(index, 1, contact);
    this.saveToLocalStorage(contacts);
    return Observable.of(contacts);
  }


  private getFromLocalStorage(): Contact[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  private saveToLocalStorage(contacts: Contact[]){
    localStorage.setItem(this.localStorageKey,JSON.stringify(contacts));
  }

}
