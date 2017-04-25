import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  //@Output('close') closed: EventEmitter<boolean>;
  isOpened: boolean = false;

  constructor() {
  }

  closeSideNav(){
    this.isOpened = false;

  }

  openSideNav(){
    this.isOpened = true;
  }

  ngOnInit() {

  }

}
