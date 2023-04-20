import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects :any = [];
  constructor(private adminService: AdminService){
    this.adminService.getSubjectsAdmin().subscribe(obj=>{
      this.subjects = obj.data;
      console.log(obj.data);
    })
  }
}
