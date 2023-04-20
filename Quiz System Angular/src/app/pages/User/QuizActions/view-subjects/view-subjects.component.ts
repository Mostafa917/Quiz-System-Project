import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent {
  subjects :any = [];
  quizzesTaken:any =[];
  errMsg:any = null;
  constructor(private userService: UserService ,private global:GlobalService,private router:Router){
    this.userService.getSubjectsUser().subscribe(obj=>{
      this.subjects = obj.data;
      for(let sub of global.userData.quizResults){
        this.quizzesTaken.push(sub.subject);  
      }
    })
  }
  checkQuizzesTaken(subject:any,id:any){ 
   
    for(let sub of this.quizzesTaken){
      if(subject.name == sub){
        this.errMsg = "Quiz Already Taken Retakes are not Allowed!";
         return;
      }
    }
    this.router.navigateByUrl(`quiz/startQuiz/${id}`);
  }
}
