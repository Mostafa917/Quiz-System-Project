import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl:string = "http://localhost:2500/api/user";
  getUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}/viewUsers`);
  }
  getSubjectsUser():Observable<any>{
    return this.http.get(`${this.baseUrl}/subjects`);
  }
  generateQuiz(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/viewQuiz/${id}`);
  }
  generateResult(userId:any,qId:any,data:any):Observable<any>{
    console.log(data);
    return this.http.post(`${this.baseUrl}/submitandGenerateResult/${userId}&${qId}`,data);
  }
   register(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,data);
   }
   login(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`,data);
   }
   viewUserProfile(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/viewProfile/${id}`);
   }
   activation(id:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/activation/${id}`,{});
   }
}
