import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  baseUrl:string = "http://localhost:2500/api/admin";

  getUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}/viewUsers`);
  }
  getSingleUser(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/viewUsers/${id}`);
  }
  getSubjectsAdmin():Observable<any>{
    return this.http.get(`${this.baseUrl}/subjects`);
  }
  getSubjectsQuestions(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/subjects/${id}`);
  }
  getAllQuestions():Observable<any>{
    return this.http.get(`${this.baseUrl}/subjects/showAllSubjectQuestions`);
  }
  getSingleQuestion(id:any,qId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/subjects/showQuestion/${id}&${qId}`);
  }
  postDeleteUser(id:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/viewUsers/delUser/${id}`,{});
  }
  postDeleteAllUsers():Observable<any>{
    return this.http.post(`${this.baseUrl}/viewUsers/delAllUsers`,{});
  }
  postDeleteQuestion(id:any,qId:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/subjects/delQuestion/${id}&${qId}`,{});
  }
  postDeleteSubject(id:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/subjects/delSubject/${id}`,{});
  }
  postDeleteAllSubjects():Observable<any>{
    return this.http.post(`${this.baseUrl}/subjects/delAllSubjects`,{});
  }
  addQuestion(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/subjects/addQuestions`,data);
  }
  getAdminRequests():Observable<any>{
    return this.http.get(`${this.baseUrl}/viewRequests`);
  }
  manageAdminRequests(id:any,response:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/viewRequests/${id}&${response}`,{});
  }
  editUsers(data:any,id:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/viewUsers/editUser/${id}`,data);
  }
}
