import {Contact} from "../contact";


export interface ContactStorage {

  showContact();
  addContact(contact: Contact);
  removeContact(index);
  editContact(contact: Contact);

}
