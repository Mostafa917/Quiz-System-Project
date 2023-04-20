import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
    users :any[] = [];
    constructor(private adminService: AdminService){
      this.adminService.getUsers().subscribe(obj=>{
        
        this.users = obj.data;
      })
    }
  
}
