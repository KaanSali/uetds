import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ApiModel } from 'src/services/api/api.model';
import { Personel, Diller, Response } from 'src/models/Models';
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
  RoleString:string;
  DilListesi:Diller[];
  PersonelDil:string[]= [];

  ngOnInit() {
    this.apimodel.getDilListesi().subscribe((data =>{
      this.DilListesi = data["Details"];
      console.log(this.DilListesi);
    }));
  }

  KayitOl(){
     if(this.Personel.Ehliyet != "" || this.Personel.ProfilFoto != "" || this.Personel.Psikoteknik != "" || this.Personel.SabikaKaydi != "" || this.Personel.SrcBelgesi != ""){
     this.apimodel.addPersonel(this.Personel).subscribe((data =>{
       alert(data);
       this.apimodel.addPersonelDil()
     }), (error) => {
       alert(JSON.stringify(error));
       });
    
   }else{
     alert("Fotoğraflar boş bırakılamaz");
   }
  }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Personel[photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
    
    
  }
}
