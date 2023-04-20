import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/interfaces/quiz';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
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
constructor(private adminService:AdminService,private _router:Router){}
  handleSubmit(form : NgForm){

    if(form.valid){
      this.adminService.addQuestion(this.model).subscribe(res=>{
        
        if(res.apiStatus)
        {this._router.navigateByUrl('/subjects');
      }

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }
}
