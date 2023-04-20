import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
  users :any[] = [];
  usernameFlag = false;
  emailFlag = false;
  msgError:any = null;
  msgSuccess:any = null;
  constructor(private userService : UserService , private _router : Router){
    this.userService.getUsers().subscribe(obj=>{
      this.users = obj.data;
    })
  }
  handleSubmit(form : NgForm){
    for(let user of this.users){
      if(user.username != this.model.username){
        this.usernameFlag= true;
      }
      else{
        this.usernameFlag= false;
        break;
      }
      if(user.email != this.model.email){
        this.emailFlag=true;
      }
      else{
        this.emailFlag=false;
        break;
      }
   }
   console.log(this.model.request);
    if(form.valid){
      if(this.emailFlag && this.usernameFlag){
      this.userService.register(this.model).subscribe(res=>{
        if(res.apiStatus)
        { 
          this._router.navigateByUrl('/login');
          }

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
      else{
        if(!this.usernameFlag && this.emailFlag){
          this.msgError = "Username is already Taken!"
        }
        else if(!this.usernameFlag && !this.emailFlag){
          this.msgError = "Username and Email are already Registered!"
        }
        else if(this.usernameFlag && !this.emailFlag){
          this.msgError = "This Email is Already Registered!"
        }
       
      }
    }
  }
}
