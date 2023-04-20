import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  id:any ='';
  model : User ={
    email: '',
    password: '',
    username: 'test',
    fname: '',
    lname: '',
    age: 12,
    isAdmin: false,
    phone: '',
    gender: '',
    request:false
  }
  constructor(private adminService : AdminService , private _router : Router,private _activatedRoute:ActivatedRoute){
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    this.adminService.getSingleUser(this.id).subscribe(obj=>{
      this.model = obj.data;
      this.model.password = '';
      console.log(this.model);
    })
  }
 

  usernameFlag = false;
  emailFlag = false;
  msgError:any = null;

  handleSubmit(form : NgForm){
    if(form.valid){
      this.adminService.editUsers(this.model,this.id).subscribe(res=>{
        if(res.apiStatus)
        { 
          this._router.navigateByUrl('/login');
          }

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }
}
