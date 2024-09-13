import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

private baseUrl:string="http://localhost:8080";
// /library/books/add

  constructor(private http:HttpClient) { }

  sendEmail(data:any) {
   return this.http.post(`${this.baseUrl}/library/email`,data) {
    params: new HttpParams().set('g','f')
   }
  }
}
