import { Component, OnInit } from '@angular/core';
import { Arac } from 'src/models/Interfaces';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiModel } from 'src/services/api/api.model';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-arac-bilgileri',
  templateUrl: './arac-bilgileri.page.html',
  styleUrls: ['./arac-bilgileri.page.scss'],
})
export class AracBilgileriPage {
  Arac:Arac = new Arac();
  plaka:string;

  constructor(public navParams: NavParams,private modal: ModalController,public apimodel:ApiModel,public camera:Camera,public helper:HelperService) { }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Arac[photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
  }

  ionViewWillEnter() {
    this.Arac = this.navParams.get('Arac');
    this.plaka = this.Arac.AracInfo.Plaka;
  }
  closeModal(){
    this.modal.dismiss();
  }

  aracGuncelle(){
    this.apimodel.updArac(this.Arac).subscribe((data=>{
      alert(data);
    }),(error => {
      console.log(error);
    }))
  }

}
