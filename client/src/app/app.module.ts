import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { MaterialModule }from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { ContactService } from "./contact/services/contact.service";
import { DialogService } from "./contact/services/dialog.service";
import { ContactHttpService } from "./contact/services/contact-http.service";
import { HttpService } from "./utils/http.service";
import {LocalStorageService} from "./contact/services/local-storage.service";
import {UserService} from "./user/user.service";

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';
import { LoginComponent } from './contact/login/login.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { SidenavComponent } from './contact/sidenav/sidenav.component';

import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { GoogleMapsPipe } from './contact/pipes/google-maps.pipe';

import { VibrationClickDirective } from './contact/directives/vibration-click.directive';
import {AuthenticationService} from "./user/authentication/authentication.service";
import {UserHttpService} from "./user/user-http.service";



const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: SidenavComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export function getHttp(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    GoogleMapsPipe,
    LoginComponent,
    ContactMainComponent,
    SidenavComponent,
    VibrationClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  entryComponents:[ContactDialogComponent, MapDialogComponent],
  providers: [ContactService, DialogService, ContactHttpService, LocalStorageService, UserService, AuthenticationService, UserHttpService,
    {
      provide: HttpService,
      useFactory: getHttp,
    deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
