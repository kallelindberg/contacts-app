import { TestBed, inject } from '@angular/core/testing';

import { ContactHttpService } from './contact-http.service';

describe('ContactHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactHttpService]
    });
  });

  it('should ...', inject([ContactHttpService], (service: ContactHttpService) => {
    expect(service).toBeTruthy();
  }));
});
