import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  selectedContact: Contact;

  constructor(contactService: ContactService){
    this.contacts = contactService.findContacts();
  }

  contactSelected(contact: Contact){
    this.selectedContact = contact;
  }
}
