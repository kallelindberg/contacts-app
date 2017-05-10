import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'lodash';
import { ContactHttpService } from './contact-http.service';
import {MockBackend} from "@angular/http/testing";
import {HttpModule, Response, ResponseOptions, XHRBackend} from "@angular/http";
import {Contact} from "../contact";

describe('ContactHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ContactHttpService, {provide:XHRBackend, useClass: MockBackend}]
    });
  });

  function contactArray() {
    return [
      new Contact(1, 'First', 'Last', '01234567', 'street', 'city'),
      new Contact(2, 'Second', 'Last', '01234567', 'street', 'city'),
      new Contact(3, 'Third', 'Last', '01234567', 'street', 'city')
    ]
  }

  it('should return a list of users',
    inject([ContactHttpService, XHRBackend], (contactHttpService, mockBackend) =>{
    const mockResponse = contactArray();
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })))
    });
    const contactsComparer = contactArray();
    contactHttpService.showContact().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c){
        expect(_.create(Contact.prototype, contacts[c.id])).toEqual(_.create(Contact.prototype, contactsComparer[c.id]));
      });
    });
  }));

});
