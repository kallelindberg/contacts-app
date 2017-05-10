import { TestBed, inject } from '@angular/core/testing';
import * as _ from "lodash";
import { ContactService } from './contact.service';
import {Contact} from "../contact";

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });


  function contactArray() {
    return [
      new Contact(1, 'First', 'Last', '01234567', 'street', 'city'),
      new Contact(2, 'Second', 'Last', '01234567', 'street', 'city'),
      new Contact(3, 'Third', 'Last', '01234567', 'street', 'city')
    ]
  }

  it('should ...', inject([ContactService], (service: ContactService) => {

    expect(service).toBeTruthy();
  }));
});
