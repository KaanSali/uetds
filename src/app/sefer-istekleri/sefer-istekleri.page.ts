import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,ActionSheetController } from '@ionic/angular'

@Component({
  selector: 'app-sefer-istekleri',
  templateUrl: './sefer-istekleri.page.html',
  styleUrls: ['./sefer-istekleri.page.scss'],
})
export class SeferIstekleriPage implements OnInit {

  constructor(private modal: ModalController,private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modal.dismiss();
  }

  async OpenActionSheet() {
    /*   const actionSheetController = document.querySelector('ion-action-sheet-controller');
         await actionSheetController.componentOnReady(); 
    */
    const actionSheet = await this.actionSheetController.create({
      id: 'sefer_detay',
      header: "SEFER DETAYI",
      buttons: [
      {
        text: 'Sefer Saati: 15:30',
        icon: 'md-time',
        handler: () => { }
      }, 
      {
        text: 'Sefer Tarihi: 19.07.2019',
        icon: 'calendar',
        handler: () => { }
      },
      {
        text: 'Kalkış Noktası',
        icon: 'pin',
        handler: () => {  }
      },
      {
        text: 'Varış Noktası',
        icon: 'flag',
        handler: () => {  }
      },
      {
        text: 'Araç: Mercedes Vito (34ASK980)',
        icon: 'md-bus',
        handler: () => {  }
      },
      {
        text: 'Onayla',
        icon: 'checkmark',
        role: 'cancel',
        handler: () => {console.log('Onayla clicked');}
      }]
    });
    await actionSheet.present();
  }

}
