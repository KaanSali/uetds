import { map } from "rxjs/operators";
import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";
import { HelperService } from "../helper.service";
import { Personel, Arac, Sirket, LoginData, IRole } from 'src/models/Interfaces';

@Injectable()
export class ApiModel {

  constructor(public apiService: ApiService, public helper: HelperService) { }

  //Personel Metodları
  getPersonelList() {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Personel/GetPersonelList")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  getPersonel(id: string) {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Personel/GetPersonel" + id)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  getPersonelbyId(id: number) {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Personel/GetPersonel" + id)
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

  updPersonel(PersonelData: Personel) {
    return this.apiService.updateMethods(this.helper.SITE_URL + "api/Personel/UpdatePersonel", PersonelData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  //Personel Metodları Sonu

  //Araç Metodları
  getAracList() {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Arac/GetAracList")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }
  getArac(plaka:string) {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Arac/GetArac"+plaka)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  addArac(AracData: Arac) {
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Arac/AddArac", AracData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }
  updArac(Arac: Arac) {
    return this.apiService.updateMethods(this.helper.SITE_URL + "api/Arac/UpdateArac", Arac)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  // Araç Metodları Sonu

  // Şirket Metodları
  getSirketList() {
    return this.apiService
      .getMethods(this.helper.SITE_URL + "api/Company/GetCompanyList")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  addSirket(SirketData: Sirket) {
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Company/AddCompany", SirketData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  updSirket(SirketData : Sirket){
    return this.apiService.updateMethods(this.helper.SITE_URL + "api/Company/UpdateCompany", SirketData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }
  // Şirket Metodları Sonu

  getDilListesi() {
    return this.apiService.getMethods(this.helper.SITE_URL + "api/Dil")
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      )
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

  //Yetki Metodları
  getYetki(id:number){
    return this.apiService.getMethods(this.helper.SITE_URL + "api/Yetki/"+ id)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      )
  }

  getYetkiList(){
    return this.apiService.getMethods(this.helper.SITE_URL + "api/Yetki/")
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    )
  }

  addYetki(YetkiData:IRole){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Yetki", YetkiData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  updYetki(id:number,YetkiData:IRole){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/Yetki/"+id, YetkiData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
    }
    deleteYetki(id:number){
    return this.apiService.deleteMethods(this.helper.SITE_URL + "api/Yetki/"+id)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
  
  //Yetki Metodları sonu
  //Personel Yetki Metodları
  getPersonelYetki(id:number){
    return this.apiService.getMethods(this.helper.SITE_URL + "api/PersonelYetki/"+ id)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      )
  }

  getPersonelYetkiList(){
    return this.apiService.getMethods(this.helper.SITE_URL + "api/PersonelYetki/")
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    )
  }

  addPersonelYetki(YetkiData:IRole){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/PersonelYetki", YetkiData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
  }

  updPersonelYetki(id:number,YetkiData:IRole){
    return this.apiService.postMethods(this.helper.SITE_URL + "api/PersonelYetki/"+id, YetkiData)
      .pipe(
        map(res => {
          let _res: any = res;
          return _res;
        })
      );
    }
    deletePersonelYetki(id:number){
    return this.apiService.deleteMethods(this.helper.SITE_URL + "api/PersonelYetki/"+id)
    .pipe(
      map(res => {
        let _res: any = res;
        return _res;
      })
    );
  }
    
  
  // Personel Yetki Metodları sonu


}