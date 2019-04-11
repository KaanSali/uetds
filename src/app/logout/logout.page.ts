import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/services/localstore.service';
import { Router } from '@angular/router';
import { HelperService } from 'src/services/helper.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(private lss:LocalStoreService,private router:Router,private helper:HelperService,private AppComponent:AppComponent) { }

  ionViewWillEnter() {
    this.lss.loginsession.clear();
    this.helper.isAuthenticated= false;
    this.router.navigate(["/login"]);
    this.AppComponent.appPages= this.AppComponent.loggedOffMenu;
  }

}
