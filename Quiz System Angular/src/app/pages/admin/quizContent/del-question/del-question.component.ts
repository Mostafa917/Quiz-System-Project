import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-del-question',
  templateUrl: './del-question.component.html',
  styleUrls: ['./del-question.component.css']
})
export class DelQuestionComponent {
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute,private _router:Router){
    const id = this._activatedRoute.snapshot.paramMap.get("id");
    const questId = this._activatedRoute.snapshot.paramMap.get("questid");
    this.adminService.postDeleteQuestion(id,questId).subscribe(res=>{

    },()=>{

    },()=>{
      this._router.navigateByUrl(`/subjects/subjectQuestions/${id}`);
    });
   
  }   
}
