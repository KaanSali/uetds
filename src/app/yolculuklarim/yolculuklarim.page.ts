import { Component, OnInit } from '@angular/core';
import{NavController,ActionSheetController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-yolculuklarim',
  templateUrl: './yolculuklarim.page.html',
  styleUrls: ['./yolculuklarim.page.scss'],
})
export class YolculuklarimPage implements OnInit {

  constructor(public router:Router,private nav:NavController,private actionSheetController: ActionSheetController,) { }

  ngOnInit() {
  }

  GoPage(){
    this.router.navigate(['/anasayfa']);
 }
//-------------------------------------------------------
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
      text: 'Sefer Tarihi: 12.07.2019',
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
    }]
  });
  await actionSheet.present();
}
}
