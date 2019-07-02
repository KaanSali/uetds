import { ApiModel } from 'src/services/api/api.model';
import { Sirket } from 'src/models/Interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuList{
  constructor(private apimodel:ApiModel){}
    public appPages = [];
    public loggedInMenu =[  ];
    public SirketListesiSubmenu = [];
    public loggedOffMenu=[
      {
        title: 'Giriş Yap',
        url: '/login',
        icon: 'contacts'
      }
    ];
    public Anasayfa = {
      title: 'Anasayfa',
        url: '/anasayfa',
        icon: 'home'
    };    
    public YolcuKaydi = {
      title: 'Yolcu Kaydı',
        url: '/yolcu-kaydi',
        icon: 'walk'
    };
  
    public PersonelListesi ={
      title:'Personeller',
      url: '/personel-list',
      icon: 'people'
    }
    public AracListesi = {
      title:'Araçlar',
      url: '/arac-listesi',
      icon: 'car'
    }
    public Ayarlar = {
      title:'Ayarlar',
      url: '/ayarlar',
      icon: 'settings'
    }
    public CikisYap = {
      title: 'Çıkış Yap',
      url: '/logout',
      icon: 'log-out',
      style: 'sss',
      mode:'md'
    }
    Sirketler:Sirket[] = [];

    async loadSubmenu(subMenu:Array<{}>){
      this.apimodel.getSirketList().subscribe((data => {
        this.Sirketler = data;
        this.appender(subMenu);
      }),error => {
        alert(error);
      })
    }
    appender(subMenu:Array<{}>){
      this.Sirketler.forEach(element => {
        subMenu.push({title:element.Ad, url:"/sirket-menusu", id:element.Id, img: element.Logo})
    });
    }
    public SirketListesi = {
      title:'Şirketler',
      icon: 'business',
      subMenu : this.SirketListesiSubmenu,
      isdropdown: true,
      style: 'SirketStyle'
    }
}