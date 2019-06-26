import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HelperService } from 'src/services/helper.service';
import { LocalStoreService } from 'src/services/localstore.service';
import { MenuList } from './menu-list';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public helper: HelperService,
    private lss:LocalStoreService,
    public menulist: MenuList,
    private router:Router,
    private menu: MenuController,
    private popoverController:PopoverController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    await this.lss.loginsession.getItem('isLoggedin').then(async (value) => {
      if (value == true) {
        await this.lss.loginsession.getItem('username').then((value) => {
        }).catch((err) => {
          alert(err);
        });
        await this.lss.loginsession.getItem('password').then((value) => {
        }).catch((err) => {
          alert(err);
        });        
        this.helper.isAuthenticated = true;
      }
    })
    if(this.helper.isAuthenticated){
      this.menulist.loggedInMenu.push(this.menulist.Anasayfa);  
      this.menulist.loggedInMenu.push(this.menulist.YolcuKaydi);      
      this.menulist.loggedInMenu.push(this.menulist.PersonelListesi);   
      this.menulist.loggedInMenu.push(this.menulist.AracListesi);
      this.menulist.appPages = this.menulist.loggedInMenu;
    }else{
      this.menulist.appPages = this.menulist.loggedOffMenu;
    }
    this.menulist.loadSubmenu(this.menulist.SirketListesiSubmenu);
  }

  logout(){
    this.lss.loginsession.clear();
    this.menu.close();
    this.helper.isAuthenticated= false;
    this.router.navigate(["/login"]);
    this.menulist.appPages= this.menulist.loggedOffMenu;
  }
  async popSirketler(ev : any){
    const popSefer = await this.popoverController.create({
      component : PopoverComponent,
      event:ev,
      translucent: true
    });
    popSefer.present();
  }
}
