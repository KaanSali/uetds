import { Component, OnInit } from '@angular/core';
import { Personel } from 'src/models/Interfaces';
import { ApiModel } from 'src/services/api/api.model';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/services/helper.service';
import { Arac } from 'src/models/Interfaces';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-sefer-ekle',
  templateUrl: './sefer-ekle.page.html',
  styleUrls: ['./sefer-ekle.page.scss'],
})
export class SeferEklePage implements OnInit {
  Personels: Personel[] = [];
  Araclar: Arac[] = [];

  barcodeData: any;
  KimlikNo: string;

  constructor(public apimodel: ApiModel,
    public modal: ModalController,
    public router: Router,
    public helper: HelperService,
    public barcodeScanner: BarcodeScanner) { }

  async ionViewWillEnter() {
    this.apimodel.getPersonelList().subscribe(data => {
      this.Personels = data;
      console.log(data);

      // tslint:disable-next-line: no-shadowed-variable
      this.apimodel.getAracList().subscribe((data => {
        this.Araclar = data;
      }), error => {
        alert(error);
      });
    });
  }

  closeModal() {
    this.modal.dismiss();
  }

  barcodeScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', JSON.stringify(barcodeData));
      if (barcodeData.cancelled === true) {
        this.barcodeData = 'Okuma İptal Edildi';
      } else {
        this.barcodeData = 'TC No: ' + barcodeData.text;
        this.KimlikNo = barcodeData.text;
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

  ngOnInit() {
  }

}
