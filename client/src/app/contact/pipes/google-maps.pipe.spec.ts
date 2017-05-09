import { GoogleMapsPipe } from './google-maps.pipe';
import {Contact} from "../contact";

describe('GoogleMapsPipe', () => {
  let pipe = new GoogleMapsPipe();
  let url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAllFNsh8DhMPeH44VrQbCxvjD8ztAUPJI&q=";

  it('return googlemaps link (street and city)', () => {
    let contact = new Contact(null, 'FirstName','LastName','089028703','Street address 1', 'City');
    expect(pipe.transform(contact)).toBe(url + contact.streetAddress + ', ' + contact.city);
  });

  it('return googlemaps link (street)', () => {
    let contact = new Contact(null, 'FirstName','LastName','089028703','Street address 1', '');
    expect(pipe.transform(contact)).toBe(url + contact.streetAddress);
  });

  it('return googlemaps link (city)', () => {
    let contact = new Contact(null, 'FirstName','LastName','089028703','', 'City');
    expect(pipe.transform(contact)).toBe(url + contact.city);
  });

  it('return empty', () => {
    let contact = null;
    expect(pipe.transform(contact)).toBe('');
  });

});
