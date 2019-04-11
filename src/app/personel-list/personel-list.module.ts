import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonelListPage } from './personel-list.page';
  
const routes: Routes = [
  {
    path: '',
    component: PersonelListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [PersonelListPage],
  entryComponents: []
})
export class PersonelListPageModule {}
