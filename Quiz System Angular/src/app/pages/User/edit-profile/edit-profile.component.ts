import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
  export class EditProfileComponent {
    id:any ='';
    model : User ={
      email: '',
      password: '',
      username: '',
      fname: '',
      lname: '',
      age: 12,
      isAdmin: false,
      phone: '',
      gender: '',
      request:false
    }
    constructor(private userService : UserService , private _router : Router,private _activatedRoute:ActivatedRoute){
      this.id = this._activatedRoute.snapshot.paramMap.get("id");
      this.userService.viewUserProfile(this.id).subscribe(obj=>{
        this.model = obj.data;
        this.model.password = '';
      })
    }
   
  
    usernameFlag = false;
    emailFlag = false;
    msgError:any = null;
  
    handleSubmit(form : NgForm){
      
      if(form.valid){
        
        this.userService.editProfile(this.id,this.model).subscribe(res=>{
          if(res.apiStatus)
          { 
            this._router.navigateByUrl(`/user/profile/${this.id}`);
            }
  
        }, (e)=>{
          console.log(e.error.message)
          this.msgError = e.error.message
        })
      }
    }
  }
