import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-del-all-subjects',
  templateUrl: './del-all-subjects.component.html',
  styleUrls: ['./del-all-subjects.component.css']
})
export class DelAllSubjectsComponent {
  constructor(private adminService: AdminService,private _router:Router){
    this.adminService.postDeleteAllSubjects().subscribe(res=>{

    },()=>{

    },()=>{
      this._router.navigateByUrl(`/subjects`);
    });
}
}
