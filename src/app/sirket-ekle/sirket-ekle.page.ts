import { Component, OnInit } from '@angular/core';
import { Sirket,Personel } from 'src/models/Models';
import { ApiModel } from 'src/services/api/api.model';
import { HelperService } from 'src/services/helper.service';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-sirket-ekle',
  templateUrl: './sirket-ekle.page.html',
  styleUrls: ['./sirket-ekle.page.scss'],
})
export class SirketEklePage {
  Sirket:Sirket = new Sirket();
  YetkiliList:Personel[] = [];
  SirketYetkilisi: string;

  constructor(public apimodel:ApiModel,public helper:HelperService, public camera:Camera) { }

  async ionViewWillEnter(){
    this.apimodel.getPersonelSirketYetki().subscribe(async (data) => {
      this.YetkiliList.push(data["Details"]);
    });
    }


  KayitOl(){
    this.apimodel.addSirket(this.Sirket).subscribe((data =>{
      console.log(data);
      alert(data["Message"]);
    }), (error) => {
      console.log(error);
      });
  }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Sirket[photoVar] = imageData;
    },(err)=>{
      alert(err);
    })}
}

