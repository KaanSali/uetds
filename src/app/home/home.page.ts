import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  barcodeData:any;
  KimlikNo:string;
  constructor(public barcodeScanner:BarcodeScanner){}
  barcodeScan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', JSON.stringify(barcodeData));
      if(barcodeData.cancelled==true){
        this.barcodeData = "Okuma İptal Edildi"
      }else{
        this.barcodeData = "TC No: " + barcodeData.text;
        this.KimlikNo = barcodeData.text;
      }
     }).catch(err => {
         console.log('Error', err);
     });
  }

  registerPassenger(){

  }
}
