import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonelBilgileriPage } from './personel-bilgileri.page';
import { PersonelListPage } from '../personel-list/personel-list.page';

const routes: Routes = [
  {
    path: '',
    component: PersonelBilgileriPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonelBilgileriPage],

})
export class PersonelBilgileriPageModule {}
