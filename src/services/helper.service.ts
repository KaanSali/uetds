import { Injectable } from "@angular/core";
import { LocalStoreService } from 'src/services/localstore.service';
import { CameraOptions } from '@ionic-native/camera/ngx';

@Injectable()
export class HelperService {
	lss:LocalStoreService;
	id: any;
	isAuthenticated:boolean;
	SITE_URL = "http://31.169.71.253:8665/";
	SITE_URL2 = "http://192.168.40.11:31385/";
	SITE_URL3 = "http://localhost:31385/";
	CurrentUserName:string ="";
	CurrentUserPic:string = "";
	cameraOptions:CameraOptions={
		destinationType:0,
		sourceType:0,
		targetHeight:512,
		targetWidth:512,
		allowEdit:true
	  }
	async delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	blankImage:string = "../../assets/icon/13-512.png";
	DilListesi=[
		"Türkçe",
		"İngilizce",
		"Arapça",
		"Almanca"
	]
}