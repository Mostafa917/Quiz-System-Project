import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {
  subName:String = "";
  quiz:any = [];
  quizAnswers:any = [];
  quizId:any = "";
  body:any={
    submittedAnswers:[]
  }
  msg = null;
  msgFlag:Boolean = false;
  constructor(private userService: UserService,private _activatedRoute:ActivatedRoute,private _router:Router,private globalService:GlobalService){
    const id = this._activatedRoute.snapshot.paramMap.get("id");
    this.userService.generateQuiz(id).subscribe(obj=>{
      this.subName = obj.data.subject;
      this.quiz = obj.data.quizTaken;
      this.quizId = obj.data._id;
    })
  }
  submitAnswers(form:NgForm){
   this.body.submittedAnswers = Object.values(form.value);
   this.userService.generateResult(this.globalService.userData._id,this.quizId,this.body).subscribe(res=>{
    if(res.message.toLowerCase().includes("not allowed")){
      this.msg = res.message;
      this.msgFlag = false;
    }
    else{
      this.msg = res.message;
      this.msgFlag = true;
      setTimeout(() => {
        this._router.navigateByUrl(`user/profile/${this.globalService.userData._id}`);
    }, 5000);
    }
 

   },(e)=>{
    console.log(e.error.message);
    this.msg = e.error.message;
   }
   )
  }
}
