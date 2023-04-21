import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
 constructor(private global:GlobalService,private router: Router){}
  canActivate(){
    if(this.global.isLoggedIn()){

      if(localStorage.getItem("isAdmin")=="true"){
        return true;
      }
      else{
        this.router.navigateByUrl("unauthorized");
        return false;
      }
    }
    else{
      this.router.navigateByUrl("login");
      return false;
    }
  
  }

  
}
