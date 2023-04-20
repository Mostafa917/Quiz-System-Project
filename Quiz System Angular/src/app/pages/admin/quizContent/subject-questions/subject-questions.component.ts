import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-subject-questions',
  templateUrl: './subject-questions.component.html',
  styleUrls: ['./subject-questions.component.css']
})
export class SubjectQuestionsComponent {
  questions :any =[];
  subject :any ={};
  id:any = "";
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute){
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    this.adminService.getSubjectsQuestions(this.id).subscribe(obj=>{
      this.questions = obj.data.question;
      this.subject=obj.data;
      console.log(this.questions)
    })
  }
}
