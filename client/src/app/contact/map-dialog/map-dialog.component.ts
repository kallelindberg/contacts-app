import { Component, Input,  OnInit } from '@angular/core';
import { Contact } from '../contact';


@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {


  @Input() address: string;

  constructor() { }

  ngOnInit() {
  }

}
