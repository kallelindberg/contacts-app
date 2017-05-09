import { ContactAddressPipe } from './contact-address.pipe';
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {

  let pipe = new ContactAddressPipe();

  it('return streetAddress and city', () => {
    let contact = new Contact(null, 'FirstName','LastName','089028703','Street address 1', 'City');
    expect(pipe.transform(contact)).toBe(contact.streetAddress + ', ' + contact.city);
  });

  it('return streetAddress', () => {
    let contact = new Contact(null, 'FirstName','LastName','089028703','Street address 1', '');
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
  });

  it('return  city', () => {
    let contact = new Contact(null, 'FirstName','LastName','089028703','', 'City');
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('return empty', () => {
    let contact = null;
    expect(pipe.transform(contact)).toBe('');
  });
});
