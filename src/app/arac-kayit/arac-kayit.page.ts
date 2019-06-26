import { Component, OnInit } from '@angular/core';
import { Arac } from 'src/models/Interfaces';
import { HelperService } from 'src/services/helper.service';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { ApiModel } from 'src/services/api/api.model';

@Component({
  selector: 'app-arac-kayit',
  templateUrl: './arac-kayit.page.html',
  styleUrls: ['./arac-kayit.page.scss'],
})
export class AracKayitPage implements OnInit {
  Arac:Arac = new Arac();

  constructor(public helper:HelperService,public camera:Camera,public apimodel:ApiModel) { }

  ngOnInit() {

  }

  changeImage(imageHolder:HTMLIonImgElement,photoVar:string){
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Arac[photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
  }
  AracKaydet(){
    if(this.Arac.AracFotograflari.Arka !="" || this.Arac.AracFotograflari.IcMekan != "" || this.Arac.AracFotograflari.On != "" || this.Arac.AracFotograflari.Ruhsat != "" || this.Arac.AracFotograflari.Sag != "" || this.Arac.AracFotograflari.SigortaPolice != "" || this.Arac.AracFotograflari.Sol != ""){
    this.apimodel.addArac(this.Arac).subscribe((data =>{
      alert(data);
    }), (error) => {
      console.log(error);
      });
  }else{
    alert("Fotoğraflar Boş Bırakılamaz");
  }}
}
