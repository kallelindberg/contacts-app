import {Component, OnInit, Input} from '@angular/core';
import {Login} from "../login";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  login: Login;
  isOpened: boolean = false;

  constructor(private router:Router,private loginService: LoginService) {
  }

  closeSideNav(){
    this.isOpened = false;

  }

  openSideNav(){
    this.isOpened = true;
  }

  logOut(){
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.login = this.loginService.login;

  }

}
