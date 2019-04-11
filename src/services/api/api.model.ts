import { map } from "rxjs/operators";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";
import { HelperService } from "../helper.service";
import { Personel, LoginData, Company, Arac } from 'src/models/Interfaces';

@Injectable()
export class ApiModel {
  
  constructor(public apiService: ApiService, public helper: HelperService) { }


  getPersonel(kimlikno: string) {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Personel/getPersonel/" + kimlikno)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  addPersonel(PersonelData: Personel) {
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Personel/AddPersonel", PersonelData)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }

  login(loginData: LoginData) {
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Personel/Login", loginData)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
  getPersonelList(){
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Personel/getPersonellist/")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }
  getCompanyList(){
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Company/getCompanylist/")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }
  getAracList(){
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Arac/getAraclist/")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }
  addCompany(PersonelData: Company) {
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Company/AddCompany", PersonelData)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
  addArac(AracData:Arac){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Arac/AddArac", AracData)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
  updArac(Arac:Arac){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Arac/UpdateArac", Arac)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
  updPersonel(PersonelData:Personel){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Personel/UpdatePersonel", PersonelData)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
}