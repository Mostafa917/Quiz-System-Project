import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient){

  }
isLogin = false;
 userData:any ={};
 getTokenId(token:any):Observable<any>{
  return this.http.post(`http://localhost:2500/api/user/userTokenId`,token);
}
isLoggedIn(){
  let token = localStorage.getItem("token");
  if(token)
  {
    return true
  }
  else{
    return false
  }
}}
