import { Component, Input,  OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";




@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {


  @Input() address: string;
  url: string;

  constructor(public dialog: MdDialogRef<MapDialogComponent>, private sanitizer: DomSanitizer) { }

  closeDialog(){
    this.dialog.close();
  }

  mapString(url){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAllFNsh8DhMPeH44VrQbCxvjD8ztAUPJI&q=" + this.address;
  }

}
