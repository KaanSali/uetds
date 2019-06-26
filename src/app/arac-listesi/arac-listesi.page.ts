import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arac } from 'src/models/Interfaces';
import { ApiModel } from 'src/services/api/api.model';
import { AracBilgileriPage } from '../arac-bilgileri/arac-bilgileri.page';
import { ModalOptions } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-arac-listesi',
  templateUrl: './arac-listesi.page.html',
  styleUrls: ['./arac-listesi.page.scss'],
})
export class AracListesiPage {
  Araclar:Arac[] = [];
  ModalOptions:ModalOptions = {
    component:AracBilgileriPage,
    componentProps:{}
  };
  constructor(public router:Router,public apimodel:ApiModel,public modal:ModalController,public helper:HelperService  ) { }

  ionViewWillEnter() {
    this.apimodel.getAracList().subscribe((data => {
      this.Araclar = data;
    }),error => {
      alert(error);
    })
  }
  async openModal(arac:Arac){
    this.ModalOptions.componentProps={Arac:arac};
    const myModal = await this.modal.create(this.ModalOptions);
    return await myModal.present();
  }
  addPage(){
    this.router.navigate(["/arac-kayit"]);
  }
}
