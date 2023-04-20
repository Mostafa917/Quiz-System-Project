import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent {
  questions :any =[];
  subjects :any =[];
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute){
    this.adminService.getAllQuestions().subscribe(obj=>{
      for(let ob of obj.data){
        for(let question of ob.question){
          this.questions.push(question);
          this.subjects.push(ob.subject);
        }
      }     
    })
  }
}
