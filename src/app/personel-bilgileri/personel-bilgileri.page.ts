import { Component, Input} from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular'
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
  RoleString:string;

  cameraOptions:CameraOptions={
    destinationType:0,
    sourceType:0,
    allowEdit:true
  }
  constructor(public navParams: NavParams,private modal: ModalController,public toastController:ToastController,public apimodel:ApiModel,public camera:Camera,public helper:HelperService) { }
  

  ionViewWillEnter() {
    this.Personel = this.navParams.get('Personel');
    this.RoleString = this.Personel.Role.RoleName;
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
    this.apimodel.updPersonel(this.Personel).subscribe((async data =>{
      const toast = await this.toastController.create({
        message: data,
        duration: 2000
      });
      toast.present();
  }), async (error) => {
      const toast = await this.toastController.create({
        message: error,
        duration: 2000
        });
      toast.present();
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
