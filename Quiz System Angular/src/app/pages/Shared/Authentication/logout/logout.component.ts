import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private _router : Router, private globalService :GlobalService){
  localStorage.setItem("token","");
  globalService.isLogin = false;
  globalService.userData._id = "";
  globalService.userData.isAdmin = false;
  this._router.navigateByUrl('/login');
}
}
