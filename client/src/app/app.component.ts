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

  constructor(private contactService: ContactService, private dialogService: DialogService){
    this.contacts = contactService.findContacts();
  }

  contactEdit(contact: Contact){
    this.dialogService.contactDialog(contact).subscribe(result => {
      this.contactService.editContact(result);
    });
  }

  removeContact(contact: Contact){
    this.contactService.removeContact(contact);
  }

  showContact(contact: Contact){
    let address = contact.streetAddress + ' ' + contact.city;
    this.dialogService.mapDialog(address);
  }

  addContact(){
    this.dialogService.contactDialog().subscribe(result => {
        this.contactService.addContact(result);
    });
  }
}
