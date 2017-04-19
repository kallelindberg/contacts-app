import { Component, Input,  OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import {Contact} from "../contact";




@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {


  @Input() contact: Contact;


  constructor(public dialog: MdDialogRef<MapDialogComponent>, private sanitizer: DomSanitizer) { }

  closeDialog(){
    this.dialog.close();
  }

  mapString(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

}
