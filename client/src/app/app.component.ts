import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contactService: ContactService, private dialogService: DialogService){
    this.contacts = contactService.findContacts();
  }

  contactEdit(contact: Contact){
    //this.selectedContact = contact;
    this.dialogService.contactDialog(contact);
  }

  removeContact(contact: Contact){
    //this.selectedContact = contact;
    this.contactService.removeContact(contact);
  }

  showContact(contact: Contact){
    let address = contact.streetAddress + ' ' + contact.city;
    this.dialogService.mapDialog(address);
  }

  addContact(contact: Contact){
    this.dialogService.contactDialog(contact);
  }
}
