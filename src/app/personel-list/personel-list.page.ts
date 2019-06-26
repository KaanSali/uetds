import { Component, OnInit } from '@angular/core';
import { Personel } from 'src/models/Models';
import { ApiModel } from 'src/services/api/api.model';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';
import { PersonelBilgileriPage } from '../personel-bilgileri/personel-bilgileri.page'
import { Router } from '@angular/router';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.page.html',
  styleUrls: ['./personel-list.page.scss'],
})
export class PersonelListPage{
  Personels:Personel[] = [];
  ModalOptions:ModalOptions = {
    component:PersonelBilgileriPage,
    componentProps:{}
  };
  constructor(public apimodel:ApiModel,public modal:ModalController,public router:Router,public helper:HelperService) { }

  async ionViewWillEnter(){
    this.apimodel.getPersonelList().subscribe(data =>{
      this.Personels = data["Details"];
      console.log(data);
    });
  }

  async openModal(personel:Personel){
    this.ModalOptions.componentProps={personelId:personel.ID};
    const myModal = await this.modal.create(this.ModalOptions);
    return await myModal.present();
  }

  addPage(){
     this.router.navigate(['/personel-kayit']);
  }
}
