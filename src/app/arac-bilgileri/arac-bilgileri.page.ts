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
  AracKeys= Object.keys(this.Arac.AracOzellikleri);
  plaka:string;
  AracOzellikleri:string[] = [];

  constructor(public navParams: NavParams,private modal: ModalController,public apimodel:ApiModel,public camera:Camera,public helper:HelperService) { }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Arac.AracFotograflari[photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
  }

  ionViewWillEnter() {
    this.Arac = this.navParams.get('Arac');
    this.plaka = this.Arac.AracInfo.Plaka;
    var a = Object.values(this.Arac.AracOzellikleri);
    var i = 0;
    a.forEach((element) => {
      if(element == true){
        this.AracOzellikleri.push(Object.keys(this.Arac.AracOzellikleri)[i]);
      }
      i++;
    })
  }
  closeModal(){
    this.modal.dismiss();
  }

  aracGuncelle(){
    if(this.Arac.AracFotograflari.Arka !="" || this.Arac.AracFotograflari.IcMekan != "" || this.Arac.AracFotograflari.On != "" || this.Arac.AracFotograflari.Ruhsat != "" || this.Arac.AracFotograflari.Sag != "" || this.Arac.AracFotograflari.SigortaPolice != "" || this.Arac.AracFotograflari.Sol != ""){
      this.AracOzellikleri.forEach(element => {
        this.Arac.AracOzellikleri[element] =true;
      })
    this.apimodel.updArac(this.Arac).subscribe((data=>{
      alert(data);
    }),(error => {
      console.log(error);
    }));
  }
  else{
    alert("Fotoğraflar Boş Bırakılamaz");
  }}

}
