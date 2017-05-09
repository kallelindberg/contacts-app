import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'lodash';
import { DialogService } from './dialog.service';
import {Contact} from "app/contact/contact";

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService]
    });
  });

  it('should ...', inject([DialogService], (service: DialogService) => {

    expect(1).toEqual(1);
  }));
});
