import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { IonicModule } from '@ionic/angular';

import { AyarlarPage } from './ayarlar.page';

const routes: Routes = [
  {
    path: '',
    component: AyarlarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AyarlarPage]
})
export class AyarlarPageModule {}
