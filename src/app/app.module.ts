import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiModel } from 'src/services/api/api.model';
import { ApiService } from 'src/services/api/api.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HelperService } from 'src/services/helper.service';
import { LocalStoreService } from 'src/services/localstore.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PersonelBilgileriPage } from './personel-bilgileri/personel-bilgileri.page';
import { AracBilgileriPage } from './arac-bilgileri/arac-bilgileri.page';
import { FormsModule } from '@angular/forms';
import { SirketBilgileriPage } from './sirket-bilgileri/sirket-bilgileri.page';
import { MenuList } from './menu-list';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [AppComponent,PersonelBilgileriPage,AracBilgileriPage,SirketBilgileriPage,PopoverComponent],
  entryComponents: [PersonelBilgileriPage,AracBilgileriPage,SirketBilgileriPage,PopoverComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({mode:'ios'}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ApiModel,
    ApiService,
    Camera,
    HelperService,
    Camera,
    LocalStoreService,
    ImagePicker,
    ModalController,
    MenuList,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports:[PersonelBilgileriPage,AracBilgileriPage,SirketBilgileriPage]
})
export class AppModule {}
