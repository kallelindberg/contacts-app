import {TestBed, inject} from '@angular/core/testing';
import * as _ from 'lodash';
import {LocalStorageService} from './local-storage.service';
import {Contact} from "app/contact/contact";

describe('LocalStorageService', () => {
  let localStorageKey = 'contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  //LocalStorage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });

  function contactArray() {
    return [
      new Contact(1, 'First', 'Last', '01234567', 'street', 'city'),
      new Contact(2, 'Second', 'Last', '01234567', 'street', 'city'),
      new Contact(3, 'Third', 'Last', '01234567', 'street', 'city')
    ]
  }


  it('should initialize LocalStorage', inject([LocalStorageService], (service: LocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('showContact should return a list of contacts from LocalStorage', inject([LocalStorageService], (service: LocalStorageService) => {

    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.showContact().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIds[c.id - 1]).toEqual(c.id);
      })
    });
  }));

  it('addContact should return an updated list of contacts from LocalStorage', inject([LocalStorageService], (service: LocalStorageService) => {

    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let testContact = new Contact(4, 'Forth', 'Last', '0123456', 'Street', 'City');
    service.addContact(testContact).subscribe((contacts: Contact[]) => {
      expect(contacts[3]).toEqual(_.create(Contact.prototype, testContact));
    });
  }));

  it('deleteContact should return an updated list of contacts from LocalStorage', inject([LocalStorageService], (service: LocalStorageService) => {

    let contacts = contactArray();
    let contactsComparer = contactArray();
    contactsComparer.splice(1,1);
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.removeContact(1).subscribe((contacts: Contact[]) => {
      _.forEach(contacts, function (c){
        expect(_.create(Contact.prototype, contacts[c.id])).toEqual(_.create(Contact.prototype, contactsComparer[c.id]));
      });
    });
  }));

  it('editContact should return an updated list of contacts from LocalStorage', inject([LocalStorageService], (service: LocalStorageService) => {

    let contacts = contactArray();
    let contactsComparer = contactArray();
    let testContact = new Contact(2, 'Pertti', 'Blobbo', '012346346343463456', 'agtreger', 'rgwehtejuyuj');
    let index = contacts.findIndex((item) => item.id === testContact.id);
    contactsComparer.splice(index,1, testContact);
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.editContact(testContact).subscribe((contacts: Contact[]) => {
        expect(contacts[index]).toEqual(_.create(Contact.prototype, contactsComparer[index]));
    });
  }));
});
