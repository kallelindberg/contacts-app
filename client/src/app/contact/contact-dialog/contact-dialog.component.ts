import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  contact: Contact;

  constructor(public dialog: MdDialogRef<ContactDialogComponent>) { }

  closeDialog(){
    this.dialog.close("sdfsd");
  }

  ngOnInit() {
  }

}
