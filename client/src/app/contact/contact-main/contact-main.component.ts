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

  constructor(private contactService: ContactService, private dialogService: DialogService){

  }

  showContact(contact: Contact){
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

  loadContacts(){
    this.contactService.findContacts().subscribe(data =>{this.contactService.contacts = data;},error => {
      console.log(error);
    });
  }

  contacts(){
    return this.contactService.contacts;
  }



  ngOnInit() {
    this.loadContacts();

  }

}
