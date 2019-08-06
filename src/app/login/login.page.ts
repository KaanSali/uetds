import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/models/Interfaces';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiModel } from 'src/services/api/api.model';
import { LocalStoreService } from 'src/services/localstore.service';
import { HelperService } from 'src/services/helper.service';
import { Personel } from 'src/models/Interfaces';
import { AppComponent } from '../app.component';
import { MenuList } from '../menu-list';

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

  constructor(private router: Router, public helper: HelperService, public toastController: ToastController, public apimodel: ApiModel, public lss: LocalStoreService, private AppComponent: AppComponent, private menulist: MenuList) { }

  async ionViewWillEnter() {
    await this.lss.loginsession.getItem('isLoggedin').then(async (value) => {
      if (value == true) {
        await this.lss.loginsession.getItem('username').then((value) => {
          var newValue = JSON.stringify(value).replace('"', '');
          this.loginData.KimlikNo = newValue.replace('"', '');
        }).catch((err) => {
          alert(err);
        });
        await this.lss.loginsession.getItem('password').then((value) => {
          var newValue = JSON.stringify(value).replace('"', '');
          this.loginData.Sifre = newValue.replace('"', '');
        }).catch((err) => {
          alert(err);
        });

        this.helper.isAuthenticated = true;
        this.lss.loginsession.getItem('CUN').then((value) => {
          var newValue = JSON.stringify(value).replace('"', '');
          this.helper.CurrentUserName = newValue.replace('"', '');
        });
        this.lss.loginsession.getItem('CUP').then((value) => {
          var newValue = JSON.stringify(value).replace('"', '');
          this.helper.CurrentUserPic = newValue.replace('"', '');
        });
      }
    })
    if (this.helper.isAuthenticated) {
      this.router.navigate(['/anasayfa']);
    }
  }

  async login() {
    this.apimodel.login(this.loginData).subscribe(async (data) => {
      const toast = await this.toastController.create({
        message: data["Message"],
        duration: 2000
      });
      toast.present();
      if (data["Status"] == true) {
        this.lss.loginsession.setItem("username", this.loginData.KimlikNo);
        this.lss.loginsession.setItem("password", this.loginData.Sifre);
        this.lss.loginsession.setItem("isLoggedin", true);
        this.helper.isAuthenticated = true;
        this.helper.CurrentUserName = data["Result"][2]["_value"][0]["_value"] + " " + data["Result"][2]["_value"][1]["_value"];
        this.helper.CurrentUserPic = data["Result"][5]["_value"][0]["_value"];
        this.lss.loginsession.setItem("CUN", this.helper.CurrentUserName);
        this.lss.loginsession.setItem("CUP", this.helper.CurrentUserPic);
        this.menulist.loggedInMenu = [];
        //this.menulist.loggedInMenu.push(this.menulist.YolcuKaydi);
        this.menulist.loggedInMenu.push(this.menulist.Anasayfa);
        this.menulist.loggedInMenu.push(this.menulist.PersonelListesi);
        this.menulist.loggedInMenu.push(this.menulist.AracListesi);
        this.menulist.loggedInMenu.push(this.menulist.Ayarlar);
        this.menulist.appPages = this.menulist.loggedInMenu;
        this.router.navigate(['/anasayfa']);
      }
    }), (error => {
      alert(JSON.stringify(error));
    })


  }

}
