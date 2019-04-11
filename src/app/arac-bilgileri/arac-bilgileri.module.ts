import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AracBilgileriPage } from './arac-bilgileri.page';

const routes: Routes = [
  {
    path: '',
    component: AracBilgileriPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AracBilgileriPage]
})
export class AracBilgileriPageModule {}
