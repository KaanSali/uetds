import { Injectable } from "@angular/core";
import { YoneticiRole, IRole } from 'src/models/Interfaces';

@Injectable()
export class HelperService {
	id: any;
	isAuthenticated:boolean;
	loginRole:IRole;
	SITE_URL = "http://31.169.65.82:8665/";
	SITE_URLEV = "http://192.168.1.28/UETDS/";
	SITE_URL2= "http://localhost/UETDS/";

	async delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	blankImage:string = "../../assets/icon/13-512.png";
}