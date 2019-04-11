import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'yolcu-kaydi',
    loadChildren: './home/home.module#HomePageModule'
  },  
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'personel-list', loadChildren: './personel-list/personel-list.module#PersonelListPageModule' },
  { path: 'personel-kayit', loadChildren: './personel-kayit/personel-kayit.module#PersonelKayitPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'personel-bilgileri', loadChildren: './personel-bilgileri/personel-bilgileri.module#PersonelBilgileriPageModule' },
  { path: 'sirket-ekle', loadChildren: './sirket-ekle/sirket-ekle.module#SirketEklePageModule' },
  { path: 'arac-kayit', loadChildren: './arac-kayit/arac-kayit.module#AracKayitPageModule' },
  { path: 'arac-listesi', loadChildren: './arac-listesi/arac-listesi.module#AracListesiPageModule' },
  { path: 'arac-bilgileri', loadChildren: './arac-bilgileri/arac-bilgileri.module#AracBilgileriPageModule' },
  { path: 'sirket-listesi', loadChildren: './sirket-listesi/sirket-listesi.module#SirketListesiPageModule' },
  { path: 'sirket-bilgileri', loadChildren: './sirket-bilgileri/sirket-bilgileri.module#SirketBilgileriPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
