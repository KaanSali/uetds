import { Component, OnInit } from '@angular/core';
import { Company, Personel } from 'src/models/Interfaces';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiModel } from 'src/services/api/api.model';
import { HelperService } from 'src/services/helper.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-sirket-bilgileri',
  templateUrl: './sirket-bilgileri.page.html',
  styleUrls: ['./sirket-bilgileri.page.scss'],
})
  export class SirketBilgileriPage{
    Sirket:Company = new Company();
    SirketAdi:string;
    cameraOptions:CameraOptions={
      destinationType:0,
      sourceType:0,
      allowEdit:true,
      targetHeight:200,
      targetWidth:200
    }
    YetkiliList:Personel[] = [];

  constructor(public navParams: NavParams,private modal: ModalController,public apimodel:ApiModel,public camera:Camera,public helper:HelperService) { }

  async ionViewWillEnter() {
    this.Sirket = this.navParams.get('Sirket');
    this.SirketAdi = this.Sirket.Ad;
    await this.GetYetkiliList();
  }
  closeModal(){
    this.modal.dismiss();
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

    this.apimodel.addCompany(this.Sirket).subscribe((data =>{
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
    })
    
    
  }
}
