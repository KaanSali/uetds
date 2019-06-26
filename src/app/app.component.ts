import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HelperService } from 'src/services/helper.service';
import { LocalStoreService } from 'src/services/localstore.service';
import { YoneticiRole, SoforRole } from 'src/models/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [];
  public loggedInMenu =[  ];
  public loggedOffMenu=[
    {
      title: 'Giriş Yap',
      url: '/login',
      icon: 'contacts'
    }
  ];
  public YolcuKaydi = {
    title: 'Yolcu Kaydı',
      url: '/yolcu-kaydi',
      icon: 'home'
  };
  public SirketListesi = {
    title:'Şirket Listesi',
    url: '/sirket-listesi',
    icon: 'business'
  }

  public PersonelListesi ={
    title:'Personel Listesi',
    url: '/personel-list',
    icon: 'contacts'
  }
  public AracListesi = {
    title:'Araç Listesi',
    url: '/arac-listesi',
    icon: 'car'
  }
  public CikisYap = {
    title: 'Çıkış Yap',
    url: '/logout',
    icon: 'log-out'
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private helper: HelperService,
    private lss:LocalStoreService,
    
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
        await this.lss.loginsession.getItem('role').then((value) => {
          switch(value){
            case "Yönetici":
            this.helper.loginRole = new YoneticiRole();
            break;
            case "Şoför":
            this.helper.loginRole = new SoforRole(); 
          }
        }).catch((err) => {
          alert(err);
        });
        
        this.helper.isAuthenticated = true;
      }
    })
    if(this.helper.isAuthenticated){
      this.loggedInMenu.push(this.YolcuKaydi);
      if(this.helper.loginRole.SuruculereErisebilme){
        this.loggedInMenu.push(this.PersonelListesi);
      }
      if(this.helper.loginRole.AraclaraErisebilme){
        this.loggedInMenu.push(this.AracListesi);
      }
      if(this.helper.loginRole.SirketDuzenleme){
        this.loggedInMenu.push(this.SirketListesi);
      }
      
      this.loggedInMenu.push(this.CikisYap);
      this.appPages = this.loggedInMenu;
    }else{
      this.appPages = this.loggedOffMenu;
    }
  }
}
