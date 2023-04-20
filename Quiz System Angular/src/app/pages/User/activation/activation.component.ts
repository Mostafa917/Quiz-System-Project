import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent {
constructor(private globalService:GlobalService,private _router:Router,private userService:UserService){

    this.userService.activation(globalService.userData._id).subscribe(res=>{

    },()=>{

    },()=>{
      if(this.globalService.userData.activeStatus){
        this.globalService.userData.activeStatus = false;
        this._router.navigateByUrl("/logout");
      }
      else{
        this.globalService.userData.activeStatus = true;
        this._router.navigateByUrl(`user/profile/${globalService.userData._id}`);
  
      }
    });
  

  }
}
