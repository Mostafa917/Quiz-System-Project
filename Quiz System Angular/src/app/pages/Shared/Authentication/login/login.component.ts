import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserLogin } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model : UserLogin ={
    email: '',
    password: ''
  }

  msgError = null
  constructor(private userService : UserService , private router : Router, private globalService :GlobalService){
    if(localStorage.getItem("token")){
      this.router.navigateByUrl('subjects');
    }
  }
  handleSubmit(form : NgForm){
    if(form.valid){
      
      this.userService.login(this.model).subscribe(res=>{

        if(res.apiStatus){
          localStorage.setItem("token",res.data.token);
          this.globalService.userData = res.data.userData;
          this.globalService.isLogin = true;

          if(res.data.userData.isAdmin){
            this.globalService.userData.isAdmin = true;
            this.router.navigateByUrl('/users');
          }
          else{
            this.globalService.userData.isAdmin = false;
           if(!this.globalService.userData.activeStatus){
            this.router.navigateByUrl('/user/activation/{{user._id}}');
           }
           else{
            this.router.navigateByUrl('/quiz');
           }
            
          }
        }
      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }
}
