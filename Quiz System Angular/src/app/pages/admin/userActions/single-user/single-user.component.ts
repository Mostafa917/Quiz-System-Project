import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  user :any = "";
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute){
    const id = this._activatedRoute.snapshot.paramMap.get("id");
    this.adminService.getSingleUser(id).subscribe(obj=>{
      this.user = obj.data;
    })
  }
}
