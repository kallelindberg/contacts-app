import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";

@Pipe({
  name: 'googleMaps',
  pure: false
})
export class GoogleMapsPipe implements PipeTransform {


  transform(contact: Contact, args?: any): any {
    let addressParts = [contact.streetAddress || null, contact.city || null];
    addressParts = _.reject(addressParts, _.isNull);
    let url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAllFNsh8DhMPeH44VrQbCxvjD8ztAUPJI&q=" + addressParts.join(', ');
    return url;
  }
}
