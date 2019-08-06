import { NgModule, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeferEklePage } from './sefer-ekle.page';
declare var google;
const routes: Routes = [
  {
    path: '',
    component: SeferEklePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeferEklePage]
})

export class SeferEklePageModule /* implements OnInit,AfterContentInit */ {
  map;
  @ViewChild('mapElement') mapElement;

  ngOnInit(): void { }

  /*   ngAfterContentInit() : void {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,{ center : {lat:-34.397, lng : 150.644}, zoom :8 });
    }
   */

  
}

