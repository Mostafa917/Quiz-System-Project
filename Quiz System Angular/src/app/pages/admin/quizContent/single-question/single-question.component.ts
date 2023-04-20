import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent {
  question :any = "";
  id : any= "";
  questId:any ="";
   subject :String = "";
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute){
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    this.questId = this._activatedRoute.snapshot.paramMap.get("questid");
    this.adminService.getSingleQuestion(this.id,this.questId).subscribe(obj=>{
      this.question = obj.data;
    })
  }
}
