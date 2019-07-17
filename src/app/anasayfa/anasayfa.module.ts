import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnasayfaPage } from './anasayfa.page';
import { SeferIstekleriPage } from '../sefer-istekleri/sefer-istekleri.page';
import { SeferEklePage } from '../sefer-ekle/sefer-ekle.page';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnasayfaPage,SeferIstekleriPage,SeferEklePage],
  entryComponents:[SeferIstekleriPage,SeferEklePage]
})
export class AnasayfaPageModule {}
