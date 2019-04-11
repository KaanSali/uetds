import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ApiModel } from 'src/services/api/api.model';
import { Personel, YoneticiRole, SoforRole } from 'src/models/Interfaces';
import { HelperService } from 'src/services/helper.service';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-personel-kayit',
  templateUrl: './personel-kayit.page.html',
  styleUrls: ['./personel-kayit.page.scss'],
})
export class PersonelKayitPage implements OnInit {

  constructor(public apimodel:ApiModel, public renderer: Renderer2,public helper:HelperService,public camera:Camera) { }
  Personel:Personel=new Personel();
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
  ngOnInit() {
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
    this.apimodel.addPersonel(this.Personel).subscribe((data =>{
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
