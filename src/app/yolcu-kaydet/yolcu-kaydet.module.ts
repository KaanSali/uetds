import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YolcuKaydetPage } from './yolcu-kaydet.page';

const routes: Routes = [
  {
    path: '',
    component: YolcuKaydetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YolcuKaydetPage]
})
export class YolcuKaydetPageModule {}
