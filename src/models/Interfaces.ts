export class Personel {
		Id: number = 0;
		Ad: string = "";
		Soyad: string = "";
		Cinsiyet: string = "";
		Email: string = "";
		KimlikNo: string = "";
		Sifre: string = "";
		Telefon: string = "";
		Uyruk: string = "";
		Ehliyet: string = "";
		ProfilFoto: string = "";
		Psikoteknik: string = "";
		SabikaKaydi: string = "";
		SrcBelgesi: string = "";
		Aktiflik: boolean = true ;
	
};
export class Sirket {
	Ad: string = "";
	Yetkili: Personel = new Personel();
	Email: string = "";
	IbanSahibi: string = "";
	IbanNo: string = "";
	Telefon: string = "";
	VergiDairesi: string = "";
	VergiNo: string = "";
	Adresi: string = "";
	B2D2BelgeNo: string = "";
	B2D2TicariUnvani: string = "";
	SeyahatAcentasiNo: string = "";
	SeyahatAcentasiUnvani: string = "";
	UETDSAdi: string = "";
	UETDSSifre: string = "";
	Logo: string = "";

}

export interface LoginData {
	KimlikNo: string,
	Sifre: string,
}

//------------Roller-----------------
export interface IRole {
	RoleName: string,
	SeferKaydiEkle: boolean,
	YolculuklaraErisebilme: boolean,
	AraclaraErisebilme: boolean,
	SuruculereErisebilme: boolean,
	CariBilgilereErisme: boolean,
	UETDSGirisiYapabilme: boolean,
	SirketDuzenleme: boolean
}

export class YoneticiRole implements IRole {
	SeferKaydiEkle = true;
	YolculuklaraErisebilme = true;
	AraclaraErisebilme = true;
	SuruculereErisebilme = true;
	CariBilgilereErisme = true;
	UETDSGirisiYapabilme = true;
	SirketDuzenleme = true;
	RoleName = "Yönetici";
}

export class SoforRole implements IRole {
	SeferKaydiEkle = true;
	YolculuklaraErisebilme = false;
	AraclaraErisebilme = false;
	SuruculereErisebilme = false;
	CariBilgilereErisme = false;
	UETDSGirisiYapabilme = false;
	SirketDuzenleme = false;
	RoleName = "Şoför";
}

export class BlankRole implements IRole {
	SeferKaydiEkle = false;
	YolculuklaraErisebilme = false;
	AraclaraErisebilme = false;
	SuruculereErisebilme = false;
	CariBilgilereErisme = false;
	UETDSGirisiYapabilme = false;
	SirketDuzenleme = false;
	RoleName = "Blank";
}

//-----------Araçlar--------------
class AracInfo{
	Plaka:string ="";
	Turu:string="";
	Marka:string="";
	Model:string="";
	Yakit:string="";
	KoltukSayisi:number = 5;
	Yili:number= 2010;
}

class AracOzellikleri{
	Buzdolabi:boolean = false;
	Klima:boolean = false;
	TV:boolean = false;
	Masa:boolean = false;
	CocukKoltugu:boolean = false;
	DVD:boolean = false;
	Mikrofon:boolean = false;
}

class AracWorkInfo{
	Aktiflik:boolean = true;
}

class AracFotograflari{
	On:string = "";
	Arka:string = "";
	Sag:string = "";
	Sol:string = "";
	IcMekan:string = "";
	SigortaPolice:string = "";
	Ruhsat:string = "";
}

export class Arac{
	Id:any;
	AracInfo:AracInfo = new AracInfo();
	AracOzellikleri:AracOzellikleri = new AracOzellikleri();
	AracFotograflari:AracFotograflari = new AracFotograflari();
	AracWorkInfo:AracWorkInfo = new AracWorkInfo();
}