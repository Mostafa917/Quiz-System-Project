import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-managing-admin-requests',
  templateUrl: './managing-admin-requests.component.html',
  styleUrls: ['./managing-admin-requests.component.css']
})
export class ManagingAdminRequestsComponent {
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute,private _router:Router){
    const id = this._activatedRoute.snapshot.paramMap.get("id");
    const response = this._activatedRoute.snapshot.paramMap.get("response");
    this.adminService.manageAdminRequests(id,response).subscribe(res=>{
    },()=>{
    },()=>{
      this._router.navigateByUrl("/users/adminRequests");
    });
    
  }
}
