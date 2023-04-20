import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user :any = "";
  constructor(private userService: UserService,private _activatedRoute:ActivatedRoute,private globalService:GlobalService){

    setTimeout(() => {
          
    this.userService.viewUserProfile(this.globalService.userData._id).subscribe(obj=>{
      this.user = obj.data;
    })
    }, 50);
  }
}
