import { Component, OnInit } from '@angular/core';
import {ContactService} from "../services/contact.service";
import {DialogService} from "../services/dialog.service";
import {Contact} from "../contact";


@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService){
    this.contacts = contactService.findContacts();
  }

  showContact(contact: Contact){
    //let address = contact.streetAddress + ' ' + contact.city;
    this.dialogService.mapDialog(contact);
  }

  addContact(){
    this.dialogService.contactDialog().subscribe(result => {
      if(result) {
        this.contactService.addContact(result);
      }
    });
  }

  editContact(contact: Contact){
    this.dialogService.contactDialog(contact).subscribe(result => {
      if(result) {
        this.contactService.editContact(result);
      }
    });
  }

  removeContact(contact: Contact){
    this.contactService.removeContact(contact);
  }

  ngOnInit() {
  }

}
