import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ApiModel } from 'src/services/api/api.model';
import { Personel, YoneticiRole, SoforRole } from 'src/models/Interfaces';
import { HelperService } from 'src/services/helper.service';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx'
import { Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-personel-kayit',
  templateUrl: './personel-kayit.page.html',
  styleUrls: ['./personel-kayit.page.scss'],
})
export class PersonelKayitPage implements OnInit {

  constructor(public apimodel:ApiModel, public renderer: Renderer2,public toastController:ToastController,public helper:HelperService,public camera:Camera) { }

  Personel:Personel=new Personel();
  RoleString:string ="";
  PersonelDil:string[]= [];

  ngOnInit() {
  }

  KayitOl(){
     if(this.Personel.PersonelFotograflari.Ehliyet != "" || this.Personel.PersonelFotograflari.ProfilFoto != "" || this.Personel.PersonelFotograflari.Psikoteknik != "" || this.Personel.PersonelFotograflari.SabikaKaydi != "" || this.Personel.PersonelFotograflari.SrcBelgesi != ""){
      switch(this.RoleString){
        case "Yönetici":
        this.Personel.Role = new YoneticiRole();
        break;
        case "Şoför":
        this.Personel.Role = new SoforRole();
        break;
      }
     this.apimodel.addPersonel(this.Personel).subscribe((async data =>{
      const toast = await this.toastController.create({
        message: data,
        duration: 2000,
        color: "primary"
      });
      toast.present();
  }), async (error) => {
      const toast = await this.toastController.create({
        message: error["message"],
        duration: 2000,
        color: "warning"
      });
      toast.present();
       });
    
   }else{
     alert("Fotoğraflar boş bırakılamaz");
   }
  }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Personel['PersonelFotograflari'][photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
    
    
  }
}
