import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SirketBilgileriPage } from './sirket-bilgileri.page';

const routes: Routes = [
  {
    path: '',
    component: SirketBilgileriPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SirketBilgileriPage]
})
export class SirketBilgileriPageModule {}
