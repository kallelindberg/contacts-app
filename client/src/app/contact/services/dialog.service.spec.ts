import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'lodash';
import { DialogService } from './dialog.service';
import {Contact} from "app/contact/contact";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService]
    });
  });

  it('should ...', inject([DialogService], (service: DialogService) => {

    expect(service).toBeTruthy();
  }));
});
