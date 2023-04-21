import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/interfaces/quiz';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent {
  subId:any = '';
  questId:any = '';
  model : Quiz ={
    subject: '',
    question: [
      {
      questionContent:'',
      answer:'',
      options: [],
      mark:1
    }],

  }
  msgError:any = null
constructor(private adminService:AdminService,private _router:Router,private _activatedRoute:ActivatedRoute){
  this.subId = this._activatedRoute.snapshot.paramMap.get("subId");
  this.adminService.getSingleQuestion(this.subId,this.questId).subscribe(obj=>{
    console.log(obj.data);
  })

}
  handleSubmit(form : NgForm){

    if(form.valid){
      this.adminService.editQuestion(this.model,this.subId,this.questId).subscribe(res=>{
        
        if(res.apiStatus)
        {this._router.navigateByUrl(`/subjects/question/${this.subId}/${this.questId}`);
      }

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }
}
