import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute,private _router:Router){
    const id = this._activatedRoute.snapshot.paramMap.get("id");
    this.adminService.postDeleteUser(id).subscribe(res=>{

    },()=>{

    },()=>{

      this._router.navigateByUrl("/users");
    });
  }
}
