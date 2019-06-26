import { Component, Input} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular'
import { Personel, Diller } from '../../models/Models';
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
  PersonelDiller:string[] =[];
  DilListesi:Diller[];
  RoleString:string;


  constructor(public navParams: NavParams,private modal: ModalController,public apimodel:ApiModel,public camera:Camera,public helper:HelperService) { }
  

  async ionViewWillEnter() {
    var PersonelId = this.navParams.get('personelId');
    await this.apimodel.getDilListesi().subscribe((data =>{
      this.DilListesi = data["Details"];
      this.apimodel.getPersonel(PersonelId).subscribe((async data => {
        this.Personel = data["Details"][0];
        data["Details"].forEach((element: { Dil_ID: number; }) => {
          this.PersonelDiller.push(element.Dil_ID.toString());
        });      
        
    }));
  }));
  }
  showPersonelDil(){
    console.log(this.PersonelDiller);
  }
  closeModal(){
    this.modal.dismiss();
  }


  KayitOl(){
     if(this.Personel.Ehliyet != "" || this.Personel.ProfilFoto != "" || this.Personel.Psikoteknik != "" || this.Personel.SabikaKaydi != "" || this.Personel.SrcBelgesi != ""){
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
    this.camera.getPicture(this.helper.cameraOptions).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     imageHolder.src = base64Image;
     this.Personel['PersonelFotograflari'][photoVar] = imageData;
    },(err)=>{
      alert(err);
    })
    
    
  }
}
