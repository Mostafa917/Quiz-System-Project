import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent {
  subjects :any = [];
  constructor(private userService: UserService){
    this.userService.getSubjectsUser().subscribe(obj=>{
      this.subjects = obj.data;
    })
  }
}
