import { ContactAddressPipe } from './contact-address.pipe';

describe('ContactAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new ContactAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
