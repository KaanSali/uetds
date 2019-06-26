import { Component, OnInit } from '@angular/core';
import { LoginData, YoneticiRole, SoforRole } from 'src/models/Interfaces';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiModel } from 'src/services/api/api.model';
import { LocalStoreService } from 'src/services/localstore.service';
import { HelperService } from 'src/services/helper.service';
import { Personel } from 'src/models/Interfaces';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  loginData: LoginData = {
    KimlikNo: "",
    Sifre: "",

  };

  constructor(private router: Router, public helper:HelperService, public toastController: ToastController, public apimodel: ApiModel, public lss:LocalStoreService,private AppComponent:AppComponent) { }

  async ionViewWillEnter() {
    await this.lss.loginsession.getItem('isLoggedin').then(async (value) => {
      if (value == true) {
        await this.lss.loginsession.getItem('username').then((value) => {
          var newValue = JSON.stringify(value).replace('"','');
          this.loginData.KimlikNo = newValue.replace('"','');
        }).catch((err) => {
          alert(err);
        });
        await this.lss.loginsession.getItem('password').then((value) => {
          var newValue = JSON.stringify(value).replace('"','');
          this.loginData.Sifre = newValue.replace('"','');
        }).catch((err) => {
          alert(err);
        });
        
        this.helper.isAuthenticated = true;
      }
    })
    if (this.helper.isAuthenticated) {
      this.router.navigate(['/yolcu-kaydi']);
    }
  }

  async login() {
    this.apimodel.login(this.loginData).subscribe(async (data) => {
      const toast = await this.toastController.create({
        message: data[0],
        duration: 2000
      });
      toast.present();
      if (data[0] == "Giriş Başarılı") {
        this.lss.loginsession.setItem("username",this.loginData.KimlikNo);
        this.lss.loginsession.setItem("password", this.loginData.Sifre);
        this.lss.loginsession.setItem("role", data[1]);
        this.lss.loginsession.setItem("isLoggedin",true);
        this.helper.isAuthenticated = true;
        switch(data[1]){
          case "Yönetici":
          this.helper.loginRole = new YoneticiRole();
          break;
          case "Şoför":
          this.helper.loginRole = new SoforRole(); 
        }
        this.AppComponent.loggedInMenu =[];
        this.AppComponent.loggedInMenu.push(this.AppComponent.YolcuKaydi);
      if(this.helper.loginRole.SuruculereErisebilme){
        this.AppComponent.loggedInMenu.push(this.AppComponent.PersonelListesi);
      }
      if(this.helper.loginRole.AraclaraErisebilme){
        this.AppComponent.loggedInMenu.push(this.AppComponent.AracListesi);
      }
      if(this.helper.loginRole.SirketDuzenleme){
        this.AppComponent.loggedInMenu.push(this.AppComponent.SirketListesi);
      }
      
      this.AppComponent.loggedInMenu.push(this.AppComponent.CikisYap);
        this.AppComponent.appPages = this.AppComponent.loggedInMenu;
        this.router.navigate(['/yolcu-kaydi']);
      }
    })


  }

}
