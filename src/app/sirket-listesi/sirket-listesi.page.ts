import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/Interfaces';
import { ModalOptions } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { SirketBilgileriPage } from '../sirket-bilgileri/sirket-bilgileri.page';
import { Router } from '@angular/router';
import { ApiModel } from 'src/services/api/api.model';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-sirket-listesi',
  templateUrl: './sirket-listesi.page.html',
  styleUrls: ['./sirket-listesi.page.scss'],
})
export class SirketListesiPage {
  Sirketler:Company[] = [];
  ModalOptions:ModalOptions = {
    component:SirketBilgileriPage,
    componentProps:{}
  };
  constructor(public router:Router,public apimodel:ApiModel,public modal:ModalController,public helper:HelperService ) { }

  ionViewWillEnter() {
    this.apimodel.getCompanyList().subscribe((data => {
      this.Sirketler = data;
    }),error => {
      alert(error);
    })
  }
  async openModal(sirket:Company){
    this.ModalOptions.componentProps={Sirket:sirket};
    const myModal = await this.modal.create(this.ModalOptions);
    return await myModal.present();
  }
  addPage(){
    this.router.navigate(["/sirket-ekle"]);
  }

}
