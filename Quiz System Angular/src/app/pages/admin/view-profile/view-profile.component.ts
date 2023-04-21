import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  user :any = "";
  constructor(private adminService: AdminService,private globalService:GlobalService){

    setTimeout(() => {
          
    this.adminService.viewAdminProfile(this.globalService.userData._id).subscribe(obj=>{
      this.user = obj.data;
    })
    }, 50);
  }
}
