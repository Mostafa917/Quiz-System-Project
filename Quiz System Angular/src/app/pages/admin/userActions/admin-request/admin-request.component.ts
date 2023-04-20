import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent {
  users :any[] = [];
  constructor(private adminService: AdminService){
    this.adminService.getAdminRequests().subscribe(obj=>{
    
      this.users = obj.data;
    })
  }
}
