import { Component, OnInit } from '@angular/core';
import { Personel } from 'src/models/Interfaces';
import { ApiModel } from 'src/services/api/api.model';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/services/helper.service';
import { Arac } from 'src/models/Interfaces';

@Component({
  selector: 'app-sefer-ekle',
  templateUrl: './sefer-ekle.page.html',
  styleUrls: ['./sefer-ekle.page.scss'],
})
export class SeferEklePage implements OnInit {
  Personels:Personel[] = [];
  Araclar:Arac[] = [];
  constructor(public apimodel:ApiModel,
    public modal:ModalController,
    public router:Router,
    public helper:HelperService) { }

  async ionViewWillEnter(){
    this.apimodel.getPersonelList().subscribe(data =>{
      this.Personels = data;
      console.log(data);

      this.apimodel.getAracList().subscribe((data => {
        this.Araclar = data ;
      }),error => {
        alert(error);
      })  
    });
  }

  closeModal(){
    this.modal.dismiss();
  }



  ngOnInit() {
  }

}
