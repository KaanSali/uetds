import { Component, OnInit } from '@angular/core';
import { Sirket, Personel } from 'src/models/Models';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiModel } from 'src/services/api/api.model';
import { HelperService } from 'src/services/helper.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-sirket-bilgileri',
  templateUrl: './sirket-bilgileri.page.html',
  styleUrls: ['./sirket-bilgileri.page.scss'],
})
export class SirketBilgileriPage implements OnInit {
  Sirket: Sirket = new Sirket();
  SirketAdi: string;
  cameraOptions: CameraOptions = {
    destinationType: 0,
    sourceType: 0,
    allowEdit: true,
    targetHeight: 200,
    targetWidth: 200
  }
  YetkiliList: Personel[] = [];
  SirketYetkilisi: string;
  constructor(public navParams: NavParams, private modal: ModalController, public apimodel: ApiModel, public camera: Camera, public helper: HelperService) { }
  async ngOnInit() {
    this.Sirket = await this.navParams.get('Sirket');
    this.SirketAdi = this.Sirket.Ad;
    this.apimodel.getPersonelbyId(this.Sirket.Yetkili_Id).subscribe(data => {
      this.SirketYetkilisi = data["Details"][0]["Adi"] + " " + data["Details"][0]["Soyadi"];
    })
  }
  async ionViewWillEnter() {
    this.apimodel.getPersonelSirketYetki().subscribe(async (data) => {
      this.YetkiliList.push(data["Details"]);
    })
  }
  closeModal() {
    this.modal.dismiss();
  }

  KayitOl() {
    this.apimodel.updSirket(this.Sirket).subscribe((data => {
      console.log(data);
    }), (error) => {
      console.log(error);
    });
  }

  changeImage(imageHolder: HTMLIonImgElement, photoVar: string) {
    this.camera.getPicture(this.helper.cameraOptions).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      imageHolder.src = base64Image;
      this.Sirket[photoVar] = imageData;
    }, (err) => {
      alert(err);
    })


  }
}
