import { Component, Input} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular'
import { Personel, YoneticiRole, SoforRole } from '../../models/Interfaces';
import { ApiModel } from 'src/services/api/api.model';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { HelperService } from 'src/services/helper.service';

@Component({
  selector: 'app-personel-bilgileri',
  templateUrl: './personel-bilgileri.page.html',
  styleUrls: ['./personel-bilgileri.page.scss'],
})
export class PersonelBilgileriPage {
  Personel:Personel = new Personel();
  DilListesi=[
    "Türkçe",
    "İngilizce",
    "Arapça",
    "Almanca"
]
  RoleString:string;

  cameraOptions:CameraOptions={
    destinationType:0,
    sourceType:0,
    allowEdit:true
  }
  constructor(public navParams: NavParams,private modal: ModalController,public apimodel:ApiModel,public camera:Camera,public helper:HelperService) { }
  

  ionViewWillEnter() {
    this.Personel = this.navParams.get('Personel');
  }
  closeModal(){
    this.modal.dismiss();
  }


  KayitOl(){
    var fotolar = this.Personel.PersonelFotograflari;
    if(fotolar.Ehliyet != "" || fotolar.ProfilFoto != "" || fotolar.Psikoteknik != "" || fotolar.SabikaKaydi != "" || fotolar.SrcBelgesi != ""){
    switch(this.RoleString){
      case "Yönetici":
      this.Personel.Role = new YoneticiRole();
      break;
      case "Şoför":
      this.Personel.Role = new SoforRole();
      break;
    }
    this.apimodel.updPersonel(this.Personel).subscribe((data =>{
      alert(data);
    }), (error) => {
      alert(JSON.stringify(error));
      });
  }else{
    alert("Fotoğraflar boş bırakılamaz");
  }
  }
  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Personel['PersonelFotograflari'][photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
    
    
  }
}
