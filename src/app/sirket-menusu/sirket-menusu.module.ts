import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SirketMenusuPage } from './sirket-menusu.page';

const routes: Routes = [
  {
    path: '',
    component: SirketMenusuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SirketMenusuPage]
})
export class SirketMenusuPageModule {}
