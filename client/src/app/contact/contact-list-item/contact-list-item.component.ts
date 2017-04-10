import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {


  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() show: EventEmitter<Contact>;


  constructor() {
  }
  editContact(contact: Contact){
    this.edit.emit(contact);
  }

  removeContact(contact: Contact){
    this.remove.emit(contact);
  }

  showContact(contact: Contact){
    this.show.emit(contact);
  }


  ngOnInit() {
  }

}
