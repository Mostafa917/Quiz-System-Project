import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  
  getUsers():Observable<any>{
    return this.http.get("http://localhost:2500/api/admin/viewUsers");
  }
  getSingleUser(id:any):Observable<any>{
    return this.http.get(`http://localhost:2500/api/admin/viewUsers/${id}`);
  }
  postDeleteUser(id:any):Observable<any>{
    return this.http.post(`http://localhost:2500/api/admin/viewUsers/delUser/${id}`,{});
  }
  postDeleteAllUsers():Observable<any>{
    return this.http.post("http://localhost:2500/api/admin/viewUsers/delAllUsers",{});
  }
}
