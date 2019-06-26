import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable()
export class ApiService {
  constructor(public http: HttpClient) { }

  getMethods(url: any): Observable<Response> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.http.get(`${url}`).pipe(
      map((res: Response) => {
        return res;
      })
    );
  }

  postMethods(url: any, data: any): Observable<Response> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json;");
    headers.append("Access-Control-Allow-Methods:", "*");
    //headers.append("x-ws-token-key", Token);
    // headers.append("x-gm-token", localStorage.getItem("token"));,
    return this.http.post(`${url}`, data, {headers:headers}).pipe(
      map((res: Response) => {
        return res;
      })
    );
  }

  updateMethods(url:any, data: any): Observable<Response>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json;");
    headers.append("Access-Control-Allow-Methods:","*");
    return this.http.put(`${url}`, data, {headers:headers}).pipe(
      map((res: Response) => {
        return res;
      })
    );
  }

  deleteMethods(url:any): Observable<Response> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.http.delete(`${url}`).pipe(
      map((res: Response) => {
        return res;
      })
    );
  }
}