import { Component, OnInit } from '@angular/core';
import { Sirket,Personel } from 'src/models/Interfaces';
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
  cameraOptions:CameraOptions={
    destinationType:0,
    sourceType:0,
    allowEdit:true,
    targetHeight:200,
    targetWidth:200
  }
  constructor(public apimodel:ApiModel,public helper:HelperService, public camera:Camera) { }

  async ionViewWillEnter(){
    await this.GetYetkiliList();
  }

  async GetYetkiliList(){
    await this.apimodel.getPersonelList().subscribe((data) =>{
      this.YetkiliList = data;
      this.YetkiliList = this.YetkiliList.filter(this.YetkiliFilter);
    });    
  }

  YetkiliFilter(personel:Personel){
    return (personel.Role.RoleName == "Yönetici");
  }

  KayitOl(){
    console.log((typeof this.Sirket.Yetkili.Id));

    this.apimodel.addSirket(this.Sirket).subscribe((data =>{
      alert(data);
    }), (error) => {
      console.log(error);
      });
  }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Sirket[photoVar] = imageData;
    },(err)=>{
      alert(err);
    })}
}

