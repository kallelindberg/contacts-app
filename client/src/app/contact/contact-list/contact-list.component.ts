import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  selectedContact: Contact;

  @Input() contacts: Contact[];
  @Output() editContact: EventEmitter<Contact>;
  @Output() removeContact: EventEmitter<Contact>;
  @Output() showContact: EventEmitter<Contact>;


  constructor() {
    this.editContact = new EventEmitter();
    this.removeContact = new EventEmitter();
    this.showContact = new EventEmitter();

  }

  ngOnInit() {
  }
}
