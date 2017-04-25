import {Contact} from "../contact";
export interface ContactStorage {

  findContact();
  addContact(contact: Contact);

}
