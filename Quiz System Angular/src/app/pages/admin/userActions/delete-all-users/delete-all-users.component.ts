import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-delete-all-users',
  templateUrl: './delete-all-users.component.html',
  styleUrls: ['./delete-all-users.component.css']
})
export class DeleteAllUsersComponent {
  constructor(private adminService: AdminService,private _router:Router){
    this.adminService.postDeleteAllUsers().subscribe(res=>{

    },()=>{

    },()=>{
      this._router.navigateByUrl("/users");
    });
  }
}
