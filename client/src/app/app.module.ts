import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule }from '@angular/material';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ContactService} from "./contact/services/contact.service";
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
