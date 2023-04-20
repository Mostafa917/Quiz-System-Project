import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-del-subject',
  templateUrl: './del-subject.component.html',
  styleUrls: ['./del-subject.component.css']
})
export class DelSubjectComponent {
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute,private _router:Router){
    const id = this._activatedRoute.snapshot.paramMap.get("id");
    this.adminService.postDeleteSubject(id).subscribe(res=>{

    },()=>{

    },()=>{
      this._router.navigateByUrl(`/subjects`);
    });
   
  }   
}
