import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardGuard implements CanActivate {
  constructor(private global:GlobalService,private router: Router){}
  canActivate(){
    if(this.global.isLoggedIn()){
      if(this.global.userData.isAdmin == false){
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
