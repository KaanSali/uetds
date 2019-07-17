import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NavController,ModalController,PopoverController,ActionSheetController} from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { SeferIstekleriPage } from '../sefer-istekleri/sefer-istekleri.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SeferEklePage } from '../sefer-ekle/sefer-ekle.page';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {

  barcodeData:any;
  KimlikNo:string;

  constructor(public router:Router,
              private nav:NavController, 
              public modalController:ModalController, 
              private popoverController:PopoverController,
              private actionSheetController: ActionSheetController,
              public barcodeScanner:BarcodeScanner) { }

  //----------------------------------------------------------------------------
  GoPage(){
    this.router.navigate(['/yolculuklarim']);
 }

 closePopover(){
   this.popoverController.dismiss();
 }

  ngOnInit() {

  }

  async popSeferEkle(ev : any){
    const popSefer = await this.popoverController.create({
      component : PopoverComponent,
      event:ev,
      translucent: true
    }); 
    popSefer.present();
  }

  //---------------------------------------------------------------------------------------
  async OpenActionSheet() {
    /*   const actionSheetController = document.querySelector('ion-action-sheet-controller');
         await actionSheetController.componentOnReady(); 
    */
    const actionSheet = await this.actionSheetController.create({
      id: 'seferEkleSecenek',
      header: "YOLCU ve SEFER EKLE",
      buttons: [
      {
        text: 'BARKOD TARAT',
        icon: 'barcode',
        handler: () => { this.barcodeScan() }
      }, 
      {
        text: 'EL İLE GİRİŞ',
        icon: 'md-create',
        handler: () => {  this.router.navigate(['/yolcu-kaydet']); }
      },
      {
        text: 'SEFER EKLE',
        icon: 'md-bus',
        handler: () => {  this.Open_Sefer_Ekle_Modal() }
      }]
    });
    await actionSheet.present();
  }
  //---------------------------------------------------------------------------------------

  async OpenModal(){
    const  modal = await this.modalController.create({
      component: SeferIstekleriPage
    });
    await modal.present();  
  }

  async Open_Sefer_Ekle_Modal(){
    const  modal = await this.modalController.create({
      component: SeferEklePage
    });
    await modal.present();  
  }


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
